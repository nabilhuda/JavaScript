

// The number of Even and Odd in ten numbers


var i = 1;
var evencount = 0;
var oddcount = 0;
var x;
while( i<=10 ) {
  x = prompt("Enter Your Numbers Here");
  if( x%2===0 ) {
    evencount++;
  } else {
  	oddcount++;
  }
  i++;
}
console.log("The number of Even in ten numbers is " + evencount);
console.log("The number of Odd in ten numbers is " + oddcount);