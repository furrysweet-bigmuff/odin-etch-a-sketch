const container = document.getElementById('container');
const btnBlack = document.querySelector('#black');
const btnRainbow = document.querySelector('#rainbow');
const containerWidth = container.offsetWidth;
let currentColor = '#000';
let randomise = false;

function hover() {
    if (randomise) {
        this.style.backgroundColor = getRandomColor();
    } else {
        this.style.backgroundColor = currentColor;
    }
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
    for (let i = 0; i < num * num; i++) {
        let newDiv = document.createElement('div');
        newDiv.style.cssText = 'width: ' + containerWidth / num + 'px; height: ' + containerWidth / num + 'px;';
        container.appendChild(newDiv);
    }

    let divs = document.querySelectorAll('#container div');

    divs.forEach(div => div.addEventListener('mouseover', hover));
}

function restart() {
    container.replaceChildren();
    let num = prompt('Enter value below 100')
    createDivs(num);
}

btnRainbow.addEventListener('click', function() {
    randomise = true;
});
btnBlack.addEventListener('click', function() {
    randomise = false;
    currentColor = '#000';
});

createDivs(16);




