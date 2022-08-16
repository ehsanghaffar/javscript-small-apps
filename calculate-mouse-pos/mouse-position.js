const ele = document.getElementById("mouse-position");

ele.addEventListener("mousedown", function (e) {
  // Get the target
  const target = e.target;

  // Get the bounding rectangle of target
  const rect = target.getBoundingClientRect();

  // Mouse position
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
});
