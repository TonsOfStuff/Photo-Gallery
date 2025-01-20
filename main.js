const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

const displayer = document.getElementById("displayer");


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
    count += 1;
    if (count > imageList.length - 1){
        count = 0;
    }
    displayer.src = "photos/" + imageList[count].id
}

function goBackward() {
    count -= 1;
    if (count < 0){
        count = imageList.length - 1;
    }
    displayer.src = "photos/" + imageList[count].id
}