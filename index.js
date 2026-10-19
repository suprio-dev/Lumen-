let toggleBtn = document.querySelector("#toggle-btn");
let lightBeam = document.querySelector("#light-beam");
let lampShade = document.querySelector("#lamp-shade");
let lampRim = document.querySelector("#lamp-rim");
let lightStatus = document.querySelector("#light-status");
let counter = 0;


toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  counter++;
  lightBeam.classList.toggle("bg-amber-300/40");
  lampShade.classList.toggle("bg-amber-300");
  lampRim.classList.toggle("bg-amber-200");
  if (counter % 2 !== 0) {
    lightStatus.textContent = `ON`;
    toggleBtn.textContent = `TURN OFF`;
  } else {
    lightStatus.textContent = `OFF`;
    toggleBtn.textContent = `TURN ON`;
  }


})