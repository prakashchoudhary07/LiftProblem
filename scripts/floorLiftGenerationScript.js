function getUrlVars() {
 var vars = {};
 var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
  vars[key] = value;
 });
 return vars;
}

let urlData = getUrlVars();
let noOfLifts = urlData["noOfLifts"];
let noOfFloors = urlData["noOfFloors"] - 1;

console.log(urlData);
console.log(noOfLifts, noOfFloors);



for (let i = 0; i < noOfLifts; i++) {
 addFloors(noOfFloors, i);
}



function addFloors(noOfFloors, liftNo) {
 var section = document.createElement('section');
 section.setAttribute('class', 'displayLiftSection');
 section.setAttribute('id', 'displayLiftSection' + liftNo);

 var element = document.getElementById("building");
 element.appendChild(section);

 var div = document.createElement('div');
 div.setAttribute('class', 'liftSetup');
 div.setAttribute('id', 'liftSetup' + liftNo);

 var element = document.getElementById('displayLiftSection' + liftNo);
 element.appendChild(div);

 let dom = "";

 let i = noOfFloors;


 //Only Down button TOp most floor
 dom += '<div class="floors" id="floor' + i + '">';
 dom += '<div class="liftButtons">';
 dom += '<div class="liftButtonDown">';
 dom += '<button onclick="moveLiftDown(' + i + ',\'lift' + liftNo + '\')">Down</button>';
 dom += '</div>';
 dom += '</div>';
 dom += '</div>';

 i--;

 //Both up and down buttons Between floos  n-1 to 1
 for (; i >= 1; i--) {
  dom += '<div class="floors" id="floor' + i + '">';
  dom += '<div class="liftButtons">';
  dom += '<div class="liftButtonUp">';
  dom += '<button onclick="moveLiftUp(' + i + ',\'lift' + liftNo + '\')">Up</button>';
  dom += '</div>';
  dom += '<div class="liftButtonDown">';
  dom += '<button onclick="moveLiftDown(' + i + ',\'lift' + liftNo + '\')">Down</button>';
  dom += '</div>';
  dom += '</div>';
  dom += '</div>';
 }

 // only up button ground floor = 0 floor
 dom += '<div class="floors" id="floor' + i + '">';
 dom += '<div class="liftButtons">';
 dom += '<div class="liftButtonUp">';
 dom += '<button onclick="moveLiftUp(' + i + ',\'lift' + liftNo + '\')">Up</button>';
 dom += '</div>';
 dom += '</div>';
 dom += '</div>';

 //Lift setup 
 dom += ' <div class="lift" id="lift' + liftNo + '">';
 dom += '<div class="liftDoors">';
 dom += '<div class="liftLeftDoor">L</div>';
 dom += '<div class="liftRightDoor">R</div>';
 dom += '</div>';
 dom += '</div>';


 document.getElementById('liftSetup' + liftNo).innerHTML = dom;




 /*  for (let i = noOfFloors; i > 0; i--) {
   var div = document.createElement('div');
   div.setAttribute('class', 'floors')
   div.setAttribute('id', 'floor' + i);
 
   var element = document.getElementById("liftSetup");
   element.appendChild(div);
 
   var div = document.createElement('div');
   div.setAttribute('class', 'liftButtons');
   div.setAttribute('id', 'button' + i);
 
 
   var element = document.getElementById("floor" + i);
   element.appendChild(div);
 
   var divUp = document.createElement('div');
   divUp.setAttribute('class', 'liftButtonsDown');
   var divDown = document.createElement('div');
   divDown.setAttribute('class', 'liftButtonsUp');
 
   var element = document.getElementById("button" + i);
   element.appendChild(divUp);
   element.appendChild(divDown);
 
   var button = document.createElement('button');
   var node = document.createTextNode('UP');
   button.setAttribute('onclick', 'moveLiftUp(' + i + ',lift' + liftNo + ')');
 
   var element = document.getElementById('')
 
 
 
  }
  */

}


