const container = document.getElementById('container');
const btnBlack = document.getElementById('black');
const btnRainbow = document.getElementById('rainbow');
const btnPicker = document.getElementById('colorPicker');
const rangeSlider = document.getElementById('range');
const rangeLabel = document.getElementById('rangeLabel');
const btnReset = document.getElementById('reset');
const btnFile = document.getElementById('file');
const containerWidth = container.offsetWidth;
let image = document.getElementById('image');
let currentColor = '#000';
let randomise = false;

function hover() {
    randomise ? this.style.backgroundColor = getRandomColor() : this.style.backgroundColor = currentColor;
}

function imageHover() {
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

function createImageDivs(num, bgImg) {
    container.replaceChildren();
    let bgHorizontalPosition;
    let bgVerticalPosition;
    // высчитываем bg position для вертикального значения
    for (let i = 0; i < num; i++) {
        bgHorizontalPosition = 0;
        bgVerticalPosition = (containerWidth / num) * i;
        // высчитываем bg position для горизонтального значения
        for (let n = 0; n < num; n++) {
            bgHorizontalPosition = (containerWidth / num) * n;
            let newDiv = document.createElement('div');
            newDiv.style.cssText = 'width: ' + containerWidth / num + 'px; height: ' + containerWidth / num + 
            'px; background-position: -' + bgHorizontalPosition + 'px -' + bgVerticalPosition + 'px; background-image: url(' + bgImg + ');';
            container.appendChild(newDiv);
        }
    }
    let divs = document.querySelectorAll('#container div');

    divs.forEach(div => div.addEventListener('mouseover', imageHover));
}

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

btnFile.addEventListener('change', function(event) {
    currentColor = '#000';
    randomise = false;
    let imageUrl = URL.createObjectURL(event.target.files[0]);
    createImageDivs(16, imageUrl);
});

createDivs(16);




