

// Determination of the two numbers GCD and LCM


var num1 = 60;
var num2 = 24;
var n1 = num1;
var n2 = num2;
var rem, gcd, lcm;
while( n2!==0 ) {
  rem = n1%n2;
  n1 = n2;
  n2 = rem;
}
gcd = n1;
lcm = num1*num2/gcd;

console.log('GCD = ' + gcd);
console.log('LCM = ' + lcm);