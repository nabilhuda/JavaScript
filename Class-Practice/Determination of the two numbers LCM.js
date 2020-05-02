

// Determination of the two numbers LCM


var x = 24;
var y = 60;
var l;
if(x>y) {
  l = x;
} else {
  l = y;
}
while(true) {
  if(l%x===0 && l%y===0) {
    console.log(l);
    break;
  }
  l++;
}
