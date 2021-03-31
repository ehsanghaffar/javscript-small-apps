
const showClock = () => {
  // get dom-element with id
  const clock = document.getElementById('clock');
  // use js Date()
  let NowDate = new Date();

  // initial hours & minutes & seconds from date
  let h = NowDate.getHours();
  let m = NowDate.getMinutes();
  let s = NowDate.getSeconds();

  // add rules to clock with if segments
  // use short hand if else
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  // add to clock element
  clock.innerText = `${h}:${m}:${s}`;
  
  setTimeout(showClock, 1000); 
}
showClock()