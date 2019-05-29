

// The number of Positive and Negative in ten numbers


var i = 1;
var posicount = 0;
var negacount = 0;
var x;
while( i<=10 ) {
  x = prompt("Enter Your Numbers Here");
  if( x>=0 ) {
    posicount++;
  } else {
  	negacount++;
  }
  i++;
}
console.log("The number of Positive in ten numbers is " + posicount);
console.log("The number of Negative in ten numbers is " + negacount);




