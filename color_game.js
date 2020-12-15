var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colordisplay = document.querySelector("#colordisplay");
var message = document.querySelector("#message");
var newgame = document.querySelector("#newgame");
var colors = []
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");
var size = 6;


colors = array(size);
var picked_color = colors[pickedcolor(size)];
colordisplay.textContent = picked_color;

easybtn.addEventListener("click", function() {
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    size = 3;
    colors = array(size);
    picked_color = colors[pickedcolor(size)];
    colordisplay.textContent = picked_color;
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});

hardbtn.addEventListener("click", function() {
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    size = 6;
    colors = array(size);
    picked_color = colors[pickedcolor(size)];
    colordisplay.textContent = picked_color;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
        square[i].style.display = "block";
    }
    h1.style.backgroundColor = "steelblue";
});

newgame.addEventListener("click", function() {
    newgame.textContent = "NEW COLORS";
    colors = array(size);
    picked_color = colors[pickedcolor(size)];

    colordisplay.textContent = picked_color;
    for (var i = 0; i < size; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    message.textContent = "Select correct one !!";
});

for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function() {
        var clickedcolor = this.style.backgroundColor;
        if (clickedcolor == picked_color) {
            message.textContent = "correct!!";
            changecolor(clickedcolor);
            newgame.textContent = "PLAY AGAIN ?";
            h1.style.backgroundColor = clickedcolor;
        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again";
        }
    });
}

function array(size_) {
    var arr = [];
    for (var i = 0; i < size_; i++) {
        arr.push(generatecolor());
    }
    return arr;
}

function generatecolor() {
    var red = Math.floor(Math.random() * 255 + 1);
    var green = Math.floor(Math.random() * 255 + 1);
    var blue = Math.floor(Math.random() * 255 + 1);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function changecolor(color) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

function pickedcolor(size_) {
    return Math.floor(Math.random() * size_);
}