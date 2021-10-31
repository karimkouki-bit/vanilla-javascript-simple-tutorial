

var mytextArea = document.getElementById('my-text'),
    
    myspanText = document.getElementById('my-span');

mytextArea.onkeyup = function () {
    
    'use strict';
    
    myspanText.textContent = 50 - this.value.length;
    
    if (myspanText.textContent < 0) {
        
        myspanText.style.color = "#f00";
    } else {
        myspanText.style.color = "#000";
    }
};