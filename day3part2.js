// day 3, part 2
// global var 'input' should still be set from the day3part1.js file. if running stand-alone, copy the input var here.
var newTown = [];

var santa = {
  x: 0,
  y: 0
};

var roboSanta = {
  x: 0,
  y: 0
};

function house(x,y) {
  this.x = x;
  this.y = y;
  this.presents = 1;
}

function checkForHouse(whichSanta) {
  var found = 0;
  newTown.forEach(function(houseToSearchFor){
    if(houseToSearchFor.x === whichSanta.x && houseToSearchFor.y === whichSanta.y) {
      found = houseToSearchFor;
    }
  });
  givePresent(found, whichSanta);
}

function givePresent(found, whichSanta) {
  if(!found) {
    var newHouse = new house(whichSanta.x, whichSanta.y);
    newTown.push(newHouse);
  } else {
    found.presents++;
  }
}

function followDirectionsFromElf() {
  input.forEach(function(instruction, index) {
    var whichSanta;
    if( (index % 2) == 0 ) {
      whichSanta = santa;
    } else { whichSanta = roboSanta; }
    switch(instruction) {
      case "^":
        whichSanta.y++;
        break;
      case "v":
        whichSanta.y--;
        break;
      case ">":
        whichSanta.x++;
        break;
      case "<":
        whichSanta.x--;
        break;
      default:
        alert("you received a faulty input of "+input+"!");
        return 0;
    }
    checkForHouse(whichSanta);
  });
  console.log(newTown.length);
  window.outputEl.innerText += '\nday 3, part 2: '+newTown.length;
}

(function init() {
  checkForHouse(santa);
  checkForHouse(roboSanta);
  followDirectionsFromElf();
})();