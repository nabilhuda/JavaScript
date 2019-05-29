

// Some fibonacci number diagnosis programs


var first = 0;
var second = 1;
var count = 0;
var n = 7;
var fibo;
while( count<n ) {
  if( count<=1 ) {
    fibo = count;
  } else {
    fibo = first+second;
    first = second;
    second = fibo;
  }
  console.log(fibo);
  count++;
}