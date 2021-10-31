/*global console*/

function capitalizeLetter(String) {
    
    'use strict';
    
    var oldArray = String.split(' '),
        newArray = [];
    
    for(var i = 0; i < oldArray.length; i++ ) {
        
        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1))
    }
    
    return newArray.join(' ');
}

console.log(capitalizeLetter('elzero web school'));