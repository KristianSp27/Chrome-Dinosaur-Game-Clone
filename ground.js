import { incrementCustomProperty, setCustomProperty } from "./updateCustomProperty";

const SPEED = 0.05;
const groundElems = document.querySelectorAll("[data-ground]");

export function setUpGround() {
  setCustomProperty(groundElems[0], "--left", 0);
  setCustomProperty(groundElems[1], "--left", 300);
}

export function updateGround(delta) {
  groundElems.forEach((ground) => {
    incrementCustomProperty(ground, "--left", delta * SPEED * -1);
  });
}
