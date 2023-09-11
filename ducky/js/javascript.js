
let aivosolumäärä = 1000;
function quack() {
    aivosolumäärä -= 1
    var body = document.getElementById('body')
    var b = document.getElementById('button')
    var z = document.getElementById('aivosolut');
    var quack = document.getElementById('quack');
    var x = document.getElementById('audio');
    quack.style.visibility = 'visible';
    x.play();
    z.textContent = "aivosoluja jäljellä: " + aivosolumäärä.toLocaleString();
    if (aivosolumäärä == 0) {
        b.hidden = "hidden";
        body.style.removeProperty("background-image");
        body.style.backgroundColor = 'red';
        z.style.color= 'CC0000';
        z.textContent = "kuolit";
        b.style.textAlign= "center";
        stop
    }
    

    setTimeout(() => quack.style.visibility = 'hidden', 500);

}