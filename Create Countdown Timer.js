/*global console*/

var seconds  = 12, // Number of seconds
    
    countDiv = document.getElementById('countdown'),
    
    secondPass,
    
    countDown = setInterval(function () {
        
        'use strict';
        
        secondPass();
        
    }, 1000);

function secondPass() {
    
    'use strict';
    
    var minutes = Math.floor(seconds / 60),
        
        remSeconds = seconds % 60;
    
    if (seconds < 10) {
        
        remSeconds = "0" + remSeconds;
    }
    
    countDiv.innerHTML = minutes + ":" + remSeconds;
    
    if (seconds > 0) {
        
        seconds = seconds - 1; // Decrease one seconds every 1000 milleseconds
        
    } else {
        
        clearInterval(countDown); // stop countdown timer
        countDiv.innerHTML = "Done";
    }
}