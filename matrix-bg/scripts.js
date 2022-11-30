
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const fontHeight = 14;
const fontFamily = "Meiryo, monospace";

const numbers = "0123456789";
const operators = "#+-\\/|=";
const katakana =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ";
const hiragana =
  "あいうえおかきくけこがぎぐげごさしすせそざじずぜぞtたちつてとだぢづでどなにぬねのはひふへほばびぶべぼぱぴぷぺぽまみむめもやゆよらりるれろわゐゑをんㅬㅭㆊㆆㆅㆃㅧㅬㅄㅃㄱ";
const persian = "ضشظصسطثیزقبرفلذغادعتئهنخمحگچپو";
const alphabet = numbers + operators + katakana + hiragana + persian;

const spawnInterval = 500;
const density = 0.7;

const glitchInterval = 500;
const glitchAmount = 0.01;

const moveScale = 0.012;

const speedBase = 1.0;
const speedDeviation = 0.4;
const streaks = 1.9;

const brightRatio = 0.1;

const randomGlyph = () => {
  return {
    glyph: alphabet[Math.floor(Math.random() * alphabet.length)],
    flipped: Math.random() < 0.5,
    bright: Math.random() < brightRatio,
  };
};

const makeUniverse = (size) => {
  out = [];
  for (let i = 0; i < size; i++) {
    out.push(randomGlyph());
  }
  return out;
};
const universe = makeUniverse(1000);

let w;
let h;

let charHeight;
let colWidth;
let colsPerLine;
let charsOnCol;

const setCanvasExtents = () => {
  w = document.body.clientWidth;
  h = document.body.clientHeight;
  canvas.width = w;
  canvas.height = h;

  // need to recalculate font properties when canvas is resized
  c.font = fontHeight + "px " + fontFamily;
  c.textBaseline = "top";
  const charSize = c.measureText("ネ");

  colWidth = charSize.width * 1.15;
  charHeight = fontHeight * 1.15;

  charsOnCol = Math.ceil(h / charHeight);
  if (charsOnCol <= 0) {
    charsOnCol = 1;
  }
  colsPerLine = Math.ceil(w / colWidth);
  if (colsPerLine <= 0) {
    colsPerLine = 1;
  }
};

setCanvasExtents();

window.onresize = () => {
  setCanvasExtents();
};

const makeTrail = (col, maxSpeed = null, headAt = null) => {
  let speed =
    speedBase + (Math.random() * speedDeviation * 2 - speedDeviation);

  if (maxSpeed > 0 && speed > maxSpeed) {
    speed = maxSpeed;
  }

  if (headAt == null) {
    headAt = -Math.floor(Math.random() * 2 * charsOnCol);
  }

  return {
    col: col,
    universeAt: Math.floor(Math.random() * universe.length),
    headAt: headAt,
    speed: speed,
    length: Math.floor(Math.random() * streaks * charsOnCol) + 8,
  };
};

const trails = [];

const clear = () => {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
};

const rgb = "#008000";
const rgbBright = "#20E020";
const rgbHead = ["#F0FFF0", "#D0F0D0", "#80C080", "#40B040"];
const rgbTail = ["#000500", "#003000", "#005000", "#007000"];

const drawTrail = (trail) => {
  const head = Math.round(trail.headAt);

  // trail has yet to enter screen from above
  if (head < 0) return;

  const x = trail.col * colWidth;
  let y = head * charHeight + charHeight * 0.35;

  for (let i = 0; i < trail.length; i++, y -= charHeight) {
    // went up beyond top screen edge?
    if (y < 0) break;
    // went down beyond bottom screen edge?
    if (y > h) continue;

    const idx = (trail.universeAt + head - i) % universe.length;
    const item = universe[idx];

    if (i < rgbHead.length) {
      c.fillStyle = rgbHead[i];
    } else if (trail.length - i - 1 < rgbTail.length) {
      c.fillStyle = rgbTail[trail.length - i - 1];
    } else {
      if (item.bright) {
        c.fillStyle = rgbBright;
      } else {
        c.fillStyle = rgb;
      }
    }

    if (item.flipped) {
      c.setTransform(-1, 0, 0, 1, 0, 0);
      c.fillText(item.glyph, -x - colWidth, y);
      c.setTransform(1, 0, 0, 1, 0, 0);
    } else {
      c.fillText(item.glyph, x, y);
    }
  }
};

const moveTrails = (distance) => {
  const trailsToRemove = [];

  const count = trails.length;
  for (let i = 0; i < count; i++) {
    const trail = trails[i];
    trail.headAt += trail.speed * distance;

    const tip = trail.headAt - trail.length;
    // if the trail went far enough down to be invisible, mark it for removal
    if (tip * charHeight > h) {
      trailsToRemove.push(i);
    }
  }

  // remove trails that went entirely beyond screen bottom edge
  while (trailsToRemove.length > 0) {
    trails.splice(trailsToRemove.pop(), 1);
  }
};

const spawnTrails = () => {
  // find topmost trail on each column
  const topTrailPerCol = [];
  for (let i = 0; i < trails.length; i++) {
    const trail = trails[i];
    const trailTop = trail.headAt - trail.length;
    const top = topTrailPerCol[trail.col];
    if (!top || top.headAt - top.length > trailTop) {
      topTrailPerCol[trail.col] = trail;
    }
  }

  // spawn new trails
  for (let i = 0; i < colsPerLine; i++) {
    let spawnProbability = 0.0;
    let maxSpeed = null;
    let headAt = null;

    if (!topTrailPerCol[i]) {
      // column has no trail at all
      // we'll try and add one
      // this most commonly happens at the beginning of the animation
      // when few trails have spawned yet
      spawnProbability = 1.0;
    } else {
      // column has a trail
      const topTrail = topTrailPerCol[i];
      const tip = Math.round(topTrail.headAt) - topTrail.length;
      if (tip > 0) {
        // if trail's top tip is on screen
        // we might spawn another one
        // probability rises the further down the tip is
        const emptySpaceRatio = tip / charsOnCol;
        spawnProbability = emptySpaceRatio;
        // heuristic limiting speed of new trail chasint the existing one
        //  we don't want the chasing trail to catch up
        maxSpeed = topTrail.speed * (1 + emptySpaceRatio);
        // we'll spawn the follow up at the top of the screen
        headAt = 0;
      }
    }

    // scale the probabilities by density
    const effectiveP = spawnProbability * density;

    // spawn?
    const p = Math.random();

    if (p < effectiveP) {
      trails.push(makeTrail(i, maxSpeed, headAt));
    }
  }
};

const glitchUniverse = (count) => {
  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * universe.length);
    universe[idx] = randomGlyph();
  }
};

let prevTime;
let glitchCollect = 0;
let spawnCollect = 0;

const init = (time) => {
  prevTime = time;
  requestAnimationFrame(tick);
};

const tick = (time) => {
  let elapsed = time - prevTime;
  prevTime = time;

  moveTrails(elapsed * moveScale);

  spawnCollect += elapsed;
  while (spawnCollect > spawnInterval) {
    spawnCollect -= spawnInterval;
    spawnTrails();
  }

  glitchCollect += elapsed;
  while (glitchCollect > glitchInterval) {
    glitchCollect -= glitchInterval;
    glitchUniverse(Math.floor(universe.length * glitchAmount));
  }

  clear();

  const count = trails.length;
  for (var i = 0; i < count; i++) {
    const trail = trails[i];
    drawTrail(trail);
  }

  requestAnimationFrame(tick);
};

requestAnimationFrame(init);