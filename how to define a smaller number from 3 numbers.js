

// how to define a smaller number from 3 numbers



var a = 13;
var b = 14;
var c = 12;
if( a<b && a<c ) {
  console.log(a + " the number is smaller than " + b + " and " + c);
} else if ( b<a && b<c ) {
  console.log(b + " the number is smaller than " + a + " and " + c);
} else {
  console.log(c + " the number is smaller than " + a + " and " + b);
}