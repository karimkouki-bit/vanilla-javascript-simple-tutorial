/*global console*/

var myElement = document.getElementById('myImg'),
    
    myImgs = [
        
        'background.jpg',
        'bg.jpg',
        'bg2.jpg',
        'small-img.jpg'
    ];

function changeImg(myElement, myImgs) {
    
    'use strict';
    
    setInterval(function () {
        
        var myrandomNum = Math.floor(Math.random() * myImgs.length);
        console.log(myrandomNum);
        myElement.src = myImgs[myrandomNum];
    }, 1000);
}
    
changeImg(myElement, myImgs);
//console.log(myImgs[myRandomNum]);