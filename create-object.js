



var something = new Object();


something.prothom = 'This is our first line';
something.ditiyo = 'This is our second line';
something.jakhusi = function() {
	return this.prothom + ' ' + this.ditiyo;
}

alert(something.jakhusi());

// for removeing add
function cross() {
	document.getElementById('advertisement').innerHTML = '';
}




