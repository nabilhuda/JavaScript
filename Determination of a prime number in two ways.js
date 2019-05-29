

// how to define a prime number


var i = 2;
var num = 11;
var count = 0;
for( i=2; i<num; i++ ) {
  if(num%i===0) {
    count++;
    break;
  }
}
if(count===0) {
  console.log(num + " the number is prime");
} else {
  console.log(num + " the number is not prime");
}






// another way to define a prime number

var i = 2;
var num = 5;
for(i=2; i<num; i++) {
  if(num%i===0) {
    console.log(num + " this number is not prime");
    break;
  }
}
if(i===num) {
  console.log(num + " this number is prime");
}








