// import { fromEvent, interval } from "rxjs";
// import { map, take } from "rxjs/operators";

let fromEvent = rxjs.fromEvent;

fromEvent(document, "click")
  .pipe(
    rxjs.operators.map((e) => e.clientX),
    rxjs.operators.filter((x) => x > 200)
  )
  .subscribe(() => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let r = Math.random() * 100;
    let color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    let circle = document.createElement("div");
    circle.style.width = circle.style.height = `${r}px`;
    circle.style.backgroundColor = color;
    circle.style.position = "absolute";
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    document.body.appendChild(circle);
  });
