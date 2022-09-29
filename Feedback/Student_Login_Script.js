//train 1
function checkPin(pin)
	{
	if(!(pin.length== 11 || pin.length==12))
	{
		return false;
	}
	var year=pin.substring(0,2);
	var clg=pin.substring(2,5);
	if(pin.length==12)
	{
	var branch=pin.substring(6,8);
	var roll=pin.substring(9,12);
	var si=5,di=8;
	}
	if(pin.length==11)
	{
		var branch=""+pin.charAt(6);
		var roll=pin.substring(8,11);		
		var si=5,di=7;
	}

	if(clg!=getCollegeCode())
	{
		return false;
	}
	if(!isNaN(year))
	{
		y=Number(year);
		if(y>=getCurrentYear()-3 && y<=getCurrentYear())
		{
			var branches=["CM","EE","EC","AA","A","C","M"];
			branch=branch.toUpperCase();
			var ok=false;
			for(var i=0;i<branches.length;i++)
			{
				if(branches[i]==branch)
				{
					ok=true;
					break;
				}
			}
			if(ok)
			{
				if(!isNaN(roll))
				{
					if(pin.charAt(si)=='-' && pin.charAt(di)=='-')
					{
						return true;
					}
				}
			}
		}
	}
	return false;
}
function getCurrentYear()
{
	var d=new Date()
	return d.getFullYear()%100;
}
function getCollegeCode()
{
	return "010";
}

function verifyPin()
{
	var a=document.getElementById("PIN");
	if(!checkPin(a.value.toString()))
	{
		document.getElementById("Ack").innerHTML=" Incorrect PIN";
		//alert("Soory");
		a.focus();
		//do what to do
	}
	else
	{
		document.getElementById("Ack").innerHTML="";
	}
}
