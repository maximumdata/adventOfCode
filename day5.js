var stringEl = document.getElementById('day5');
var strings = stringEl.textContent.split('\n').filter(function(l){return l.length>0});
function nice(str){
  var vowels=str.match(/[aeiou]/g);
  var badCouplet=str.match(/ab|cd|pq|xy/);
  var doubles=str.match(/([a-z])\1/);
  return (vowels!=undefined&&vowels.length>2) && (badCouplet==undefined||badCouplet.length==0) && (doubles!=undefined&&doubles.length>0);
}
var answer = strings.filter(nice).length;
window.outputEl.innerText += "\nday 5, part 1: " + answer;
console.log(answer);

function nice2(str) {
  var repeat=str.match(/([a-z][a-z])[a-z]*\1/);
  var zxz=str.match(/([a-z])[a-z]\1/);
  return (repeat!=undefined&&repeat.length>0)&&(zxz!=undefined&&zxz.length>0);
}
answer = strings.filter(nice2).length;
window.outputEl.innerText += "\nday 5, part 2: " + answer;
console.log(answer);