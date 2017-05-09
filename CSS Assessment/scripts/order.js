//----------------------- START OF ORDER VALIDATION -----------------------//

 function validateOrder()
    
    {
        var form = document.getElementById("order");
        for.addEventListener("submit", validateOrderForm);
    }

function validateOrderForm()

    {
    var form= document.getElementById("order");
    var toppings = false;
    var txt = "";
    var i;
    }

    if(form.pizzabase.value == "")
        {
            document.getElementById("errorbase").style.display = "block";
            event.preventDefault(0);
        }
    else
    {
        document.preventDefault("errorbase").style.display = "none";    
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

function startDate_Time()
{
    var today = new Date();
    var curr_hour = today.getHours();
    var curr_minute = ('0' + today.getMinutes()).slice(-2);
    var curr_second = ('0' + today.getSeconds()).slice(-2);
    
    var cur_time = curr_hour + ":" + curr_minute + ":" + curr_second;
    
    document.getElementById("clock").innerHTML = today.toDateString() + " / / " + cur_time;
    
    setTimeout(startDate_Time, 500);
    
}
