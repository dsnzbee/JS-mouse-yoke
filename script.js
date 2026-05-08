const debug = document.getElementById("debug");
const yoke = document.getElementById("yoke");
const sky = document.getElementById("blue");
const ground = document.getElementById("orange");
const ladder = document.getElementById("ladder");

document.addEventListener("mousemove", function(event){
  let x = event.clientX / window.innerWidth;
  let y = event.clientY / window.innerHeight;

  let roll = (x - 0.5) * 35;
  let pitch = (0.5 - y) * 100;

  debug.innerHTML =
   "X: " + Math.round(event.clientX) + "<br>" +
   "Y: " + Math.round(event.clientY) + "<br>" +
   "ROLL: " + Math.round(roll) + "DEG<br>" +
   "PITCH: " + Math.round(pitch);

  yoke.style.left = event.clientX + "px";
  yoke.style.top = event.clientY + "px";

    ladder.style.transform = "translateY(" + pitch + "px) rotate(" + roll + "deg)";
});
