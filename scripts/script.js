let isLiftWorking = false;
let totalFloor = 2
let liftPresentFloor = 0;

let floor0 = document.getElementById("floor0").getBoundingClientRect();
let positionOfLift = floor0.top;
let setLiftPostition = document.getElementById("lift1");
lift1.style.top = positionOfLift + 'px';

let positionOfFloor = 0;

function liftWorkingStatus() {
 isLiftWorking = true;
}

function moveLiftUp(floorNumber) {

 let lift1 = document.getElementById("lift1");
 let floorA = document.getElementById("floor" + floorNumber).getBoundingClientRect();
 let top = floorA.top;
 let left = floorA.left;

 console.log(top);
 console.log(left);

 if (liftPresentFloor != floorNumber) {
  let id = setInterval(frameDown, 10);
  function frameDown() {
   if (positionOfLift >= top) {
    clearInterval(id);
   } else {
    positionOfLift++;
    lift1.style.top = positionOfLift + 'px';
   }
  }

 }

 let id = setInterval(frame, 10);
 function frame() {
  if (positionOfLift <= top) {
   clearInterval(id);
  } else {
   positionOfLift--;
   lift1.style.top = positionOfLift + 'px';
  }
 }
 liftPresentFloor = floorNumber;

}

function moveLiftDown(floorNumber) {
 let lift1 = document.getElementById("lift1");
 let floorA = document.getElementById("floor" + floorNumber).getBoundingClientRect();
 let top = floorA.top;
 let left = floorA.left;

 console.log(top);
 console.log(left);

 if (liftPresentFloor != floorNumber) {
  let id = setInterval(frameUp, 10);
  function frameUp() {
   if (positionOfLift <= top) {
    clearInterval(id);
   } else {
    positionOfLift--;
    lift1.style.top = positionOfLift + 'px';
   }
  }

 }


 let id = setInterval(frame, 10);
 function frame() {
  if (positionOfLift >= top) {
   clearInterval(id);
  } else {
   positionOfLift++;
   lift1.style.top = positionOfLift + 'px';
  }
 }
 liftPresentFloor = floorNumber;

}