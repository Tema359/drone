let drone = document.querySelector(".drone-box");

function defaultPosition(drone) {
  let top = 100;
  let left = 580;

  drone.style.top = `${top}px`;
  drone.style.left = `${left}px`;
}
defaultPosition(drone);

let moveLeft = 580;
let moveBottom = 100;
document.onkeydown = (event) => {
  let step = 5;

  if (event.key === "ArrowRight") {
    drone.style.left = `${moveLeft}px`;
    moveLeft = moveLeft + step;
  }
  if (event.key === "ArrowDown") {
    drone.style.top = `${moveBottom}px`;
    moveBottom = moveBottom + step;
  }
  if(event.key === 'ArrowLeft') {
    drone.style.left = moveLeft + 'px'
    moveLeft = moveLeft - step
  }
  if(event.key === 'ArrowUp') {
    drone.style.top = `${moveBottom}px`
    moveBottom = moveBottom - step
  }
};
