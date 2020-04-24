function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

setTimeout(function() {
    printLetterByLetter("load", "Load \"$\",8", 50);
}, 50);

setTimeout(function() {
    document.querySelector("#page-heading").style.visibility = "visible";
}, 600)

setTimeout(function() {
    printLetterByLetter("list", "List", 150);
}, 600);

setTimeout(function() {
    setInterval(function() {
        document.querySelector("#post-list").style.visibility = "visible";
        document.getElementById("cursor").classList.toggle("blink");
    }, 600);
}, 800)
