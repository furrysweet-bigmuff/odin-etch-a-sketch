const container = document.getElementById('container');
const btnBlack = document.getElementById('black');
const btnRainbow = document.getElementById('rainbow');
const btnPicker = document.getElementById('colorPicker');
const rangeSlider = document.getElementById('range');
const rangeLabel = document.getElementById('rangeLabel');
const btnReset = document.getElementById('reset');
const containerWidth = container.offsetWidth;
let currentColor = '#000';
let randomise = false;

function hover() {
    randomise ? this.style.backgroundColor = getRandomColor() : this.style.backgroundColor = currentColor;
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
}

// function createDivs(num) {
//     let bgHorizontalPosition;
//     let bgVerticalPosition;
//     // высчитываем bg position для вертикального значения
//     for (let i = 0; i < num; i++) {
//         bgHorizontalPosition = 0;
//         bgVerticalPosition = (containerWidth / num) * i;
//         // высчитываем bg position для горизонтального значения
//         for (let n = 0; n < num; n++) {
//             bgHorizontalPosition = (containerWidth / num) * n;
//             let newDiv = document.createElement('div');
//             newDiv.style.cssText = 'width: ' + containerWidth / num + 'px; height: ' + containerWidth / num + 
//             'px; background-position: -' + bgHorizontalPosition + 'px -' + bgVerticalPosition + 'px;';
//             container.appendChild(newDiv);
//         }
//     }
//     let divs = document.querySelectorAll('#container div');

//     divs.forEach(div => div.addEventListener('mouseover', hover));
// }

function createDivs(num) {
    container.replaceChildren();
    for (let i = 0; i < num * num; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.cssText = 'width: ' + containerWidth / num + 'px; height: ' + containerWidth / num + 'px;';
        container.appendChild(newDiv);
    }

    let divs = document.querySelectorAll('#container div');

    divs.forEach(div => div.addEventListener('mouseover', hover));
}

btnRainbow.addEventListener('click', function() {
    randomise = true;
});
btnBlack.addEventListener('click', function() {
    randomise = false;
    currentColor = '#000';
});
btnPicker.addEventListener('input', function() {
    randomise = false;
    currentColor = this.value;
});
btnReset.addEventListener('click', function() {
    let divs = document.querySelectorAll('#container div');
    divs.forEach(div => div.style.backgroundColor = "white");
});
rangeSlider.addEventListener('input', function() {
    rangeLabel.textContent = this.value + "x" + this.value;
    createDivs(this.value);
});


createDivs(16);




