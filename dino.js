const dinoElem = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.011;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
export function setUpDino() {
  isJumping = false;
}

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump();
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElem.src = `imgs/dino-stationary.jpg`;
    return;
  }

  if (currentFrameTime > FRAME_TIME) {
  }
  currentFrameTime += delta * speedScale;
}

function handleJump() {}
