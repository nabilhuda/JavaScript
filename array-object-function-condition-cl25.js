// Data type = string, integer, float, array, object


// array

// var amra = {'profession' : 'Trainer', 'age' : 24, 'height' : 5.8, 'skills' : 'developer'};

// alert('Amar profession: ' + amra['profession']);
// alert('Amar age: ' + amra['age']);
// alert('Amar height: ' + amra['height']);
// alert('Amar skills: ' + amra['skills']);


// ---------------------------


// object

// object = method + property
// var content = 'We are Learning Javascript and we are learning php indeed';
// property
// alert(content.length);

// method
// document.write(content);
// var something = content.lastIndexOf('are'); // indexOf is a default method
// alert(something);


// ---------------------------

// function

function ami() {
	return 'Hello World!';
}


function person( one, two ) {
	console.log( one + two );
}
person('amra', 'tomra');




// object related

document.getElementById('abc').style.color = 'red';
document.getElementById('abc').style.fontSize = '20px';
document.getElementById('abc').style.fontFamily = 'tahoma';
document.getElementById('abc').style.backgroundColor = 'blue';




// conditionals


var result = prompt('Result dibi kina bol');
var passMark = 33;

if ( result >= passMark && result <= 100 ) {
	document.write('Rohim pass korce');
}
else if ( result < 0 || result > 100 ) {
	document.write('Invalid Result');
}
else {
	document.write('Rohim fail korce');
}



