

// how to define leap year and non-leap year



var year = 2016;
if( year%400 === 0 ) {
  console.log('leap Year');
} else if( year%100 !== 0 && year%4 === 0 ) {
  console.log(year + " Leap Year");
} else {
  console.log(year + " Not Leap Year");
}




