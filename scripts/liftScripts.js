let isLiftWorking = false;
let totalFloor = 2
let liftPresentFloor = [];

//prototype used to add element of elemet
Element.prototype.getElementById = function (id) {
    return document.getElementById(id);
}

//Ofset values function

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

// var div11 = document.getElementById("floor0");
// var divOffset = offset(div11);
// console.log(divOffset.left, divOffset.top);



// let floor0 = document.getElementById("floor0").getBoundingClientRect();
// console.log(document.getElementById("floor0").offsetTop); 

let positionOfLiftTop = [];


let adjustTop = offset(document.getElementById('floor0')).top;

for (let i = 0; i < noOfLifts; i++) {
    liftPresentFloor = 0;
    let x = document.getElementById('liftSetup' + i);
    let positionOfLift = offset(x);

    console.log(x, positionOfLift, i);
    positionOfLiftTop[i] = positionOfLift.top + adjustTop - 45;
    let positionOfLiftLeft = positionOfLift.left + 40;

    let lift = document.getElementById('lift' + i);
    lift.style.top = positionOfLiftTop[i] + 'px';
    lift.style.left = positionOfLiftLeft + 'px';
}

function liftWorkingStatus() {
    isLiftWorking = true;
}

function moveLiftUp(floorNumber, liftNumber) {

    let lift1 = document.getElementById(liftNumber);
    liftNumber = liftNumber.match(/\d/g);
    liftNumber = liftNumber.join("");
    let x = document.getElementById('liftSetup' + liftNumber);
    let adjustTop = offset(x).top;
    let floorA = offset(document.getElementById("floor" + floorNumber));
    let top = floorA.top + adjustTop - 45;
    let left = floorA.left;
    console.log(top, left);


    if (liftPresentFloor[liftNumber] != floorNumber) {
        let id = setInterval(frameDown, 5);
        function frameDown() {
            if (positionOfLiftTop[liftNumber] >= top) {
                clearInterval(id);
            } else {
                positionOfLiftTop[liftNumber]++;
                lift1.style.top = positionOfLiftTop[liftNumber] + 'px';
            }
        }

    }

    let id = setInterval(frame, 5);
    function frame() {
        if (positionOfLiftTop[liftNumber] <= top) {
            clearInterval(id);
        } else {
            positionOfLiftTop[liftNumber]--;
            lift1.style.top = positionOfLiftTop[liftNumber] + 'px';
        }
    }
    liftPresentFloor[liftNumber] = floorNumber;

}

function moveLiftDown(floorNumber, liftNumber) {

    let lift1 = document.getElementById(liftNumber);
    liftNumber = liftNumber.match(/\d/g);
    liftNumber = liftNumber.join("");
    let x = document.getElementById('liftSetup' + liftNumber);
    let adjustTop = offset(x).top;
    let floorA = offset(document.getElementById("floor" + floorNumber));
    let top = floorA.top + adjustTop - 45;
    let left = floorA.left;
    console.log(top, left);

    if (liftPresentFloor[liftNumber] != floorNumber) {
        let id = setInterval(frameUp, 5);
        function frameUp() {
            if (positionOfLiftTop[liftNumber] <= top) {
                clearInterval(id);
            } else {
                positionOfLiftTop[liftNumber]--;
                lift1.style.top = positionOfLiftTop[liftNumber] + 'px';
            }
        }

    }


    let id = setInterval(frame, 5);
    function frame() {
        if (positionOfLiftTop[liftNumber] >= top) {
            clearInterval(id);
        } else {
            positionOfLiftTop[liftNumber]++;
            lift1.style.top = positionOfLiftTop[liftNumber] + 'px';
        }
    }
    liftPresentFloor[liftNumber] = floorNumber;

}


