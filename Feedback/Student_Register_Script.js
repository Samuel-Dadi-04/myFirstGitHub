function checkPin(pin)
	{
	if(!(pin.length== 11 || pin.length==12))
	{
		return false;
	}
	var year=pin.substring(0,2);
	var clg=pin.substring(2,5);
	if(pn.length==12)
	{
	var branch=pin.substring(6,8);
	var roll=pin.substring(9,12);
	var si=5,di=8;
	}
	if(pin.length==11)
	{
		var branch=pin.substring(6,7);
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
}

function verifyName()
		{
			
			var a=document.getElementsByClassName("noSymbol")[0];
			if(isNotThereSymbol(a.value) && isNotThereNumber(a.value) && a.value.length!="")
			{
				document.getElementById("Ack").innerHTML="";	
			}
			else
			{
				document.getElementById("Ack").innerHTML="Incorrect Name Symbols/Numbers Found";
				a.value="";
				a.focus();
			}

		}
		function verifySurname()
		{
			var a=document.getElementsByClassName("noSymbol")[1];
			if(isNotThereSymbol(a.value) && isNotThereNumber(a.value) && a.value.length!="")
			{
				document.getElementById("Ack").innerHTML="";	
			}
			else
			{
				document.getElementById("Ack").innerHTML="Incorrect Surname Symbols/Numbers Found";
				a.value="";
				a.focus();
			}
		}
		function verifyDOB()
		{
			var a=document.getElementById("DOB");
			if(a.value=="")
			{
				a.focus();
				document.getElementById("Ack").innerHTML="Enter Date of Birth";
			}
			else
			{
				document.getElementById("Ack").innerHTML="";
			}
		}
		function verifyPhone()
		{
			var a=document.getElementsByClassName("noSymbol")[2];
			if(isNaN(Number(a.value)) || !isNotThereSymbol(a.value))
			{
				document.getElementById("Ack").innerHTML="Incorrect Phone Number characters found";
				a.value="";
				a.focus();
			}
			else if(a.value.length!=10)
			{
				document.getElementById("Ack").innerHTML="Phone Number must be 10 digits";
				a.value="";
				a.focus();	
			}
			else
			{
				document.getElementById("Ack").innerHTML="";
			}
		}

		function verifyBranch()
		{
			var a=document.getElementById("branchSelect");
			if(a.value=="")
			{
				a.focus();
				document.getElementById("Ack").innerHTML="Select the Branch";
			}
			else
			{
				document.getElementById("Ack").innerHTML="";	
				document.getElementById("submitBtn").disabled=false;
			}
		}


		function isNotThereSymbol(str)
		{
			var x="!@#$%^&*()_+{}:\"|<>?-=[];\',\\./`~";

			for(var i=0;i<str.length;i++)
			{
				if(x.indexOf(str.charAt(i))!=-1)
				{
					return false;
				}
			}
			return true;
		}
		function isNotThereNumber(str)
		{
			var x="1234567890";
			for(var i=0;i<str.length;i++)
			{
				if(x.indexOf(str.charAt(i))!=-1)
				{
					return false;
				}
			}
			return true;
		}