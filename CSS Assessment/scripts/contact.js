//----------------------- START OF CONTACT VALIDATION -----------------------//
function validate()
{
    var form = document.querySelector('.contactForm');
    form.addEventListener("submit", validateForm)
}

function validateForm()
{
	var myform = document.querySelector('.contactForm');
	
	if (myform.firstname.value == "")
	{
		formValid = false;
        document.querySelector('.fname').style.border = "solid 2px #D84242";
	}
	
	else
	{
        document.querySelector('.fname').style.border = "solid 2px #51894C";
	}
	
	if(myform.lastname.value == "")
	{
		formValid = false;
        document.querySelector('.lname').style.border = "solid 2px #D84242";
		event.preventDefault();
	}
	
	else
	{
        document.querySelector('.lname').style.border = "solid 2px #51894C";
	}
    
}

//----------------------- END OF CONTACT VALIDATION -----------------------//
