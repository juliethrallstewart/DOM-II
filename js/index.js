// Your code goes here

// page load alert using 'load'

// window.addEventListener('load', (event) => {
//     alert("It\'s Adventure Time!");
// });

// stop navigation items from refreshing the page using preventDefault

const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
    //console.log("I was clicked");
    event.preventDefault;
})

// nav links using 'click'

const navLinks = document.querySelectorAll('nav a');

//console.log(navLinks)


navLinks.forEach(item => item.addEventListener('click', randomColor))

function randomColor() {
    let min = 100000;
    let max = 500000;
    let randomNumber = Math.floor(Math.random() * (+max - +min));
    if (randomNumber < 10000) {
        randomNumber += 10000;
    }
    event.target.style.color = `#${randomNumber}`;
    //console.log(`#${randomNumber}`)
    event.stopPropagation()

}


//When mousing over images become grayscale & revert to saturate using 'mouseover' & 'mouseout'
const images = document.querySelectorAll('img');
//console.log(images)

images.forEach(item => item.addEventListener('mouseover', grayScaleImg));

function grayScaleImg() {
    if (event.target.style.filter !== "grayscale(1)") {
        event.target.style.filter = "grayscale(1)"
    } else if (event.target.style.filter === "grayscale(1)") {
        event.target.addEventListener('mouseout', colorImg)
    }
}

function colorImg() {
    event.target.style.filter = "saturate(100%)";
}

// REMOVED text background color using 'dblclick'

// let text0 = document.getElementsByClassName('text-content')[0];
// let text1 = document.getElementsByClassName('text-content')[1];

// text0.addEventListener('dblclick', background);
// text1.addEventListener('dblclick', background);

// double-clicking anywhere on the page turns the background-color a new color, double clicking again reverts it
const body = document.querySelector('html');
body.addEventListener('dblclick', background);

function background() {
    if (event.target.style.backgroundColor !== "orange") {
        event.target.style.backgroundColor = "orange";
    } else if (event.target.style.backgroundColor === "orange") {
        event.target.style.backgroundColor = "";
    }
}

// use keys to change the color of the h2 headers using 'keydown' on the window
// e.code returns the keyCode associated with the keydown

window.addEventListener('keydown', keyColor)

function keyColor(e) {
    const h2 = document.querySelectorAll('h2');
    switch (e.code) {
        case "KeyA":
            h2.forEach(item => item.style.color = 'orange');
            break;
        case "KeyS":
            h2.forEach(item => item.style.color = 'teal');
            break;
        case "KeyD":
            h2.forEach(item => item.style.color = 'red');
            break;
        case "KeyF":
            h2.forEach(item => item.style.color = 'purple');
            break;
    }
}

// when scrolling console.log 'Wheeeeeeeee!' using 'scroll'

window.addEventListener('scroll', event => console.log("Wheeeeeeeeee!"))

//  when resizing the window display height & width in the console *ONLY*
const heightOutput = document.getElementById("height")
const widthOutput = document.getElementById("width")

const windowSizingText = document.querySelectorAll(".windowSizing")
windowSizingText.forEach(item => item.style.display = "none");


window.addEventListener('resize', event => {
    heightOutput.innerHTML = window.innerHeight;
    widthOutput.innerHTML = window.innerWidth;
    console.log(heightOutput, widthOutput)
})


// removed
//navLinks.forEach(item => item.addEventListener('focus', highlight)
// function highlight() {
//     if (event.target.style.backgroundColor !== 'lightblue') {
//         event.target.style.backgroundColor = 'lightblue';
//     } else if (event.target.style.backgroundColor === 'lightblue') {
//         event.target.addEventListener('blur', removeColor)
//     }
// }

// function removeColor() {
//     event.target.style.backgroundColor === '';
//     alert("i made it")
// }