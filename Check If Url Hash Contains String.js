
/*

if(window.location.hash) {
    if(window.location.hash.indexOf("osama") === 1) {
        console.log("Good osama hash is found ")
    } else {
        console.log("Bad Theres No hash in link")
    }
}

*/
if(window.location.hash) {
    var hash = window.location.hash.substring(2);
    if(hash === "osama") {
        console.log("Good Osama Hash is Found")
    } 
    else {
        console.log("Bad Theres No hash in link ")
    }
}