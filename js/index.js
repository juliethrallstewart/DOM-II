// Your code goes here

// page load alert using 'load'

// window.addEventListener('load', (event) => {
//     alert("It\'s Adventure Time!");
// });

// stop navigation items from refreshing the page using preventDefault

const nav = document.querySelector('nav');
nav.addEventListener('click', event => {
    console.log("I was clicked");
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
    console.log(`#${randomNumber}`)
}


//When mousing over images become grayscale & revert using 'mouseover' & 'mouseout'
const images = document.querySelectorAll('img');
console.log(images)

images.forEach(item => item.addEventListener('mouseover', grayScaleImg));

// const image1 = document.getElementsByTagName('img')[0];
// const image2 = document.getElementsByTagName('img')[1];
// const image3 = document.getElementsByTagName('img')[2];
// const image4 = document.getElementsByTagName('img')[3];

// image1.addEventListener('mouseover', grayScaleImg);
// image2.addEventListener('mouseover', grayScaleImg);
// image3.addEventListener('mouseover', grayScaleImg);
// image4.addEventListener('mouseover', grayScaleImg);


function grayScaleImg() {
    if (event.target.style.filter !== "grayscale(1)") {
        event.target.style.filter = "grayscale(1)"
    } else if (event.target.style.filter === "grayscale(1)") {
        event.target.addEventListener('mouseout', colorImg)
    }
}

function colorImg() {
    event.target.style.filter = "none";
}

// text background color using 'dblclick'

let text0 = document.getElementsByClassName('text-content')[0];
let text1 = document.getElementsByClassName('text-content')[1];

text0.addEventListener('dblclick', background);
text1.addEventListener('dblclick', background);


function background() {
    event.target.style.backgroundColor = "orange";
}

//removed styling
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