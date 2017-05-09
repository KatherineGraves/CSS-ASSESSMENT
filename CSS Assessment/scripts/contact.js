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
    
    var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var isValid = pattern.test(email);
   if(!pattern == isValid){
       errorHandler += "Please enter a valid email address...";
       emailError.style.color="red";
       email.style.borderColor="red";
   }
   if(errorHandler.length > 15){
       alert(errorHandler);
       return false;
   }
}

//----------------------- END OF CONTACT VALIDATION -----------------------//
