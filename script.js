const container = document.getElementById('container');
const btn = document.querySelector('button');
const containerWidth = container.offsetWidth;

function hover() {
    this.classList.add('hover');
}

function createDivs(num) {
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
            'px; background-position: -' + bgHorizontalPosition + 'px -' + bgVerticalPosition + 'px;';
            container.appendChild(newDiv);
        }
    }
    let divs = document.querySelectorAll('#container div');

    divs.forEach(div => div.addEventListener('mouseover', hover));
}

function restart() {
    container.replaceChildren();
    let num = prompt('Enter value below 100')
    createDivs(num);
}

btn.addEventListener('click', restart);

createDivs(16);




