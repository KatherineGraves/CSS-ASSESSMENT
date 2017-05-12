//----------------------- START OF ORDER VALIDATION -----------------------//

 function validate()
    
    {
        var form = document.getElementById("order");
        form.addEventListener("submit", validateOrderForm);
    }

function validateOrderForm(event)

    {
    var form= document.getElementById("order");
    var toppings = false;

    if(form.base.value == "")
        {
            document.getElementById("errorBase").style.display = "block";
            event.preventDefault();
            
        }
    else
    {
        document.preventDefault("errorBase").style.display = "none"; 
        
    }
    
    for(var i =0; i < form.toppings.length; i++)
        {
            if(form.toppings[i].checked)
                {
                    toppings = true;
                   
                }
        }
    
    if(toppings == false)
        {
            document.getElementById("errortopping").style.display = "block";
            event.preventDefault();
            
        }
    else
        {
            document.getElementById("errortopping").style.display = "none";
           
        }


}

//----------------------- END OF ORDER VALIDATION -----------------------/
