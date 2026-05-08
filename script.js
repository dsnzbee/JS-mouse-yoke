const yoke = document.getElementById("yoke");

document.addEventListener("mousemove", (event) => {

  let mouseX = event.clientX;

  let rotation = (mouseX / window.innerWidth) * 60 - 30;

  yoke.style.transform = `rotate(${rotation}deg)`;

});
