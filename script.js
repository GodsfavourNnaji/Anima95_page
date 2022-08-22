function editText() {
    var element = document.getElementById("editNoteOverlay");
    element.classList.toggle("show")
}
//function favouritesTab() {
//    var element = document.getElementById("favouriteOverlay");
//    element.classList.toggle("favouriteShow")
//}



function viewCode() {
    var element = document.getElementById("");
    element.classList.toggle("show")
}


document.querySelector('.menu_bars').addEventListener
('click', () => document.querySelector('.menu_ol').classList.toggle('show'));

document.querySelector('.fav1').addEventListener
('click', () => document.querySelector(".favouriteOverlay").classList.toggle('favouriteShow'));

document.querySelector('.profile_icon').addEventListener
('click', () => document.querySelector('.profileOverlay').classList.toggle('profileShow'));

function moveDown() {
    var element = document.getElementById("element");
    element.classList.toggle("move_down")
}

function moveUp() {
    var element = document.getElementById("element");
    element.classList.toggle("move_up")
}

function moveLeft() {
    var element = document.getElementById("element");
    element.classList.toggle("move_left")
}

function moveRight() {
    var element = document.getElementById("element");
    element.classList.toggle("appear-from-right")
}

function bounce() {
    var element = document.getElementById("element");
    element.classList.toggle("bounce")
}

function fade() {
    var element = document.getElementById("element");
    element.classList.toggle("fade")
}

function blink() {
    var element = document.getElementById("element");
    element.classList.toggle("blink")
}

function tremble() {
    var element = document.getElementById("element");
    element.classList.toggle("tremble")
}

function rotate() {
    var element = document.getElementById("element");
    element.classList.toggle("rotate")
}






function colorbg(event){
    var color = event.value;
    document.getElementsByTagName('textarea')[0].style.backgroundColor=color;
    document.getElementsByClassName('change')[0].style.backgroundColor=color;
}

//USerNote OverLay JS
function toggleText(){
    var x = document.getElementById('notes');
    if (x.style.display === 'none'){
        x.style.display = 'block'
    } else{
        x.style.display = 'none'
    };
};
document.getElementById('notes').style.display = 'none';


//Element options experiment
if (document.getElementById("element_selector").value === "text") {
    var y = document.getElementById('element');
    if (y.style.display == 'none'){
        y.style.display = 'block'
    }
} else if (document.getElementById("element_selector").value === "circle") {
    var z = document.getElementById('element');
    if (z.style.display === 'none'){
        z.style.display = 'block'
    }
} else if (document.getElementById("element_selector").value === "square") {
    var w = document.getElementById('element');
    if (w.style.display === 'none'){
        w.style.display = 'block'
    }
}
