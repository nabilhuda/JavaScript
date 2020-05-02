

// how many numbers in the 10 numbers are even and odd


var i = 1;
var evencount = 0;
var oddcount = 0;
while( i<=10 ){
  if( i%2===0 ) {
    evencount++;
  } else {
    oddcount++;
  }
  i++;
}
console.log('The Even number between 1 to 10 is ' + evencount);
console.log('The Odd number between 1 to 10 is ' + oddcount);




