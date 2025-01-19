const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

const displayer = document.getElementById("displayer");

const imageList = [
    "scr00000.jpg",
    "scr00001.jpg",
    "scr00002.jpg"
]

let count = 0;


function goForward() {
    count += 1;
    if (count > imageList.length - 1){
        count = 0;
    }
    displayer.src = "photos/" + imageList[count]
}

function goBackward() {
    count -= 1;
    if (count < 0){
        count = imageList.length - 1;
    }
    displayer.src = "photos/" + imageList[count]
}