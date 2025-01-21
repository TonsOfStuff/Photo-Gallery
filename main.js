const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

const displayer = document.getElementById("displayer");
const displayer2 = document.getElementById("displayer2");

const photoInfoText = document.getElementById("infoText");


//Construction of classes
class ImageDisplay{
    constructor(id, tags, info) {
        this.id = id;
        this.tags = tags;
        this.info = info;
    }
}

const imageList = [
    new ImageDisplay("scr00000.jpg", ["Space"], "Picture of space"),
    new ImageDisplay("scr00001.jpg", ["Space"], "Picture of space"),
    new ImageDisplay("scr00002.jpg", ["Space"], "Picture of space")
]

let count = 0;

function goForward() {
    forward.disabled = true;
    backward.disabled = true;
    count += 1;
    if (count > imageList.length - 1){
        count = 0;
    }






    displayer2.src = "photos/" + imageList[count].id
    displayer2.style.display = "block";
    displayer2.style.position = "absolute";

    displayer.style.animation = "imageMove 1.5s forwards";
    displayer2.style.animation = "imageMove2 1.5s forwards"; 
    setTimeout(() => {
        displayer.style.animation = "none";
        displayer.src = displayer2.src;

        displayer2.style.animation = "none";

        forward.disabled = false;
        backward.disabled = false;
    }, 1400) 
    

}

function goBackward() {
    forward.disabled = true;
    backward.disabled = true;
    count -= 1;
    if (count < 0){
        count = imageList.length - 1;
    }
    displayer2.src = displayer.src;
    displayer.src = "photos/" + imageList[count].id
    displayer2.style.display = "block";
    displayer2.style.position = "absolute";

    displayer.style.animation = "imageMove 1.5s forwards reverse";
    displayer2.style.animation = "imageMove2 1.5s forwards reverse"; 
    setTimeout(() => {
        displayer.style.animation = "none";
        displayer2.style.animation = "none";

        forward.disabled = false;
        backward.disabled = false;
    }, 1450) 
}