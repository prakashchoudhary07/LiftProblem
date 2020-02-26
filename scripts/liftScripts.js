let isLiftWorking = false;
let totalFloor = 2
let liftPresentFloor = 0;

function offset(el) {
 var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
 return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

var div11 = document.getElementById("floor0");
var divOffset = offset(div11);
console.log(divOffset.left, divOffset.top);



// let floor0 = document.getElementById("floor0").getBoundingClientRect();

// console.log(document.getElementById("floor0").offsetTop); 


let positionOfLift = offset(document.getElementById("floor0"));
let positionOfLiftTop = positionOfLift.top;
let positionOfLiftLeft = positionOfLift.left;

let setLiftPostition = document.getElementById("lift0");
lift0.style.top = positionOfLiftTop + 'px';
lift0.style.left = positionOfLiftLeft + 'px';

let positionOfLiftFloor = 0;

function liftWorkingStatus() {
 isLiftWorking = true;
}

function moveLiftUp(floorNumber, liftNumber) {
 let lift1 = document.getElementById(liftNumber);
 let floorA = offset(document.getElementById("floor" + floorNumber));
 let top = floorA.top;
 let left = floorA.left;
 console.log(top, left);


 if (liftPresentFloor != floorNumber) {
  let id = setInterval(frameDown, 10);
  function frameDown() {
   if (positionOfLiftTop >= top) {
    clearInterval(id);
   } else {
    positionOfLiftTop++;
    lift1.style.top = positionOfLiftTop + 'px';
   }
  }

 }

 let id = setInterval(frame, 10);
 function frame() {
  if (positionOfLiftTop <= top) {
   clearInterval(id);
  } else {
   positionOfLiftTop--;
   lift1.style.top = positionOfLiftTop + 'px';
  }
 }
 liftPresentFloor = floorNumber;

}

function moveLiftDown(floorNumber, liftNumber) {
 let lift1 = document.getElementById(liftNumber);
 let floorA = offset(document.getElementById("floor" + floorNumber));
 let top = floorA.top;
 let left = floorA.left;

 console.log(top);
 console.log(left);

 if (liftPresentFloor != floorNumber) {
  let id = setInterval(frameUp, 10);
  function frameUp() {
   if (positionOfLiftTop <= top) {
    clearInterval(id);
   } else {
    positionOfLiftTop--;
    lift1.style.top = positionOfLiftTop + 'px';
   }
  }

 }


 let id = setInterval(frame, 10);
 function frame() {
  if (positionOfLiftTop >= top) {
   clearInterval(id);
  } else {
   positionOfLiftTop++;
   lift1.style.top = positionOfLiftTop + 'px';
  }
 }
 liftPresentFloor = floorNumber;

}


