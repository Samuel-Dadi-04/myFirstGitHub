function checkPin(pin)
{
	var year=pin.substring(0,2);

	var clg=pin.substring(2,3);
	var branch=pin.substring(6,2);
	var shift=pin.charAt(9);
	var roll=pin.substring(10,2);

	document.write(yesr+" "+clg+" "+branch+" "+shift+" "+roll);
}