var myButton = document.getElementById('my-button'),
    
    myInput = document.getElementById('my-input');

myButton.onclick = function () {
    
    'use strict';
    
    if (this.textContent === "Show Password") {
        
        myInput.setAttribute('type', 'text');
        
        this.textContent = 'Hide Password';
    } else {
        
        myInput.setAttribute('type', 'password');
        
        this.textContent = 'Show Password';
    }
};