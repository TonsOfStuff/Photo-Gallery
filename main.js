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
    new ImageDisplay("scr00000.jpg", ["Space", "Rings"], "Picture of space"),
    new ImageDisplay("scr00001.jpg", ["Space"], "Picture of space"),
    new ImageDisplay("scr00002.jpg", ["Space"], "View of the neighbhor"),
    new ImageDisplay("scr00003.jpg", ["Space"], "Sunset next to an open cluster"),
    new ImageDisplay("scr00004.jpg", ["Space", "Orion"], "Life next to the Orion Nebula"),
    new ImageDisplay("scr00005.jpg", ["Space", "Eclipse"], "Eclipse Eating into a moon"),
    new ImageDisplay("scr00006.jpg", ["Space", "Planet"], "View of a gas giant"),
    new ImageDisplay("scr00007.jpg", ["Space"], "Sunrise"),
    new ImageDisplay("scr00008.jpg", ["Space", "Rings"], "Earth-like planet with rings"),
    new ImageDisplay("scr00009.jpg", ["Space"], "View of the Galactic Center"),
    new ImageDisplay("scr00010.jpg", ["Space"], "Starry skies behind a thin atmosphere")
]

photoInfoText.innerText = imageList[0].info; //Set up in initialization

let count = 0;

function goForward() {
    forward.disabled = true;
    backward.disabled = true;
    count += 1;
    if (count > imageList.length - 1){
        count = 0;
    }

    photoInfoText.innerText = imageList[count].info;




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

    photoInfoText.innerText = imageList[count].info;





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
    }, 1500) 
}