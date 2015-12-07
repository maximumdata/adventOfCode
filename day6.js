var input = document.getElementById('day6');
input = input.textContent.split('\n').filter(function(l){return l.length>0});

function parseCommand(text) {
  var parsed = text.match(/(.*) (\d+),(\d+) through (\d+),(\d+)/);
  return { 
    action : parsed[1], 
    start : {x:Math.min(parsed[2],parsed[4]), y:Math.min(parsed[3],parsed[5])}, 
    end : {x:Math.max(parsed[2],parsed[4]), y:Math.max(parsed[3],parsed[5])} }
}

function applyCommand(grid, command) {
  for( var x=command.start.x; x<=command.end.x; x++ ) {
    for( var y=command.start.y; y<=command.end.y; y++ ) {
      if (grid[x] == undefined) grid[x] = [];
      if (grid[x][y] == undefined) grid[x][y] = false;
      switch(command.action) {
        case "turn on":
          grid[x][y] = true;
          break;
        case "turn off":
          grid[x][y] = false;
          break;
        case "toggle":
          grid[x][y] = !grid[x][y];
          break;
      }
    }
  }

  return grid;
}

var answer = input
.map(parseCommand)
.reduce(applyCommand, [])
.reduce(function(count,row){
  return count + row.filter(function(l){return l}).length
},0);

console.log('day 6, part 1: '+answer);
window.outputEl.innerText += '\nday 6, part 1: ' + answer;

function applyCommand2(grid, command) {
  for( var x=command.start.x; x<=command.end.x; x++ ) {
    for( var y=command.start.y; y<=command.end.y; y++ ) {
      if (grid[x] == undefined) grid[x] = [];
      if (grid[x][y] == undefined) grid[x][y] = 0;
      switch(command.action) {
        case "turn on":
          grid[x][y] += 1;
          break;
        case "turn off":
          if( grid[x][y] > 0) grid[x][y] -= 1;
          break;
        case "toggle":
          grid[x][y] += 2;
          break;
      }
    }
  }

  return grid;
}

answer = input
.map(parseCommand)
.reduce(applyCommand2, [])
.reduce(function(intensity,row){
  return intensity + row.reduce(function(intensity,col){
    return intensity + col
  },0)
},0);

console.log('day 6, part 2: '+answer);
window.outputEl.innerText += '\nday 6, part 2: ' + answer;