function verifyDepartment()
		{
			var branchBody=document.getElementById("Department");
			if(branchBody.value=="")
			{
				document.getElementById("Ack").innerHTML="Select the branch";
				branchBody.focus();
			}
			else
			{
				document.getElementById("Ack").innerHTML="";
			}
		}