//----------------------- START OF DATE AND TIME -----------------------//
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

//----------------------- END OF DATE AND TIME -----------------------//
