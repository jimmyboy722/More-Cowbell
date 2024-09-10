export function comeSoFar() {
    console.log()
}

function comeSoFar() {
    const newDiv = document.createElement('div');
    div.classList.toggle('moreCowbell');

    const newImg = document.createElement('img');
    img.src = 'Main\assets\images\sad cow.gif';
    img.alt = 'A very sad cow';
    img.style.borderRadius = '15px';
    newDiv.appendChild(newImg);

    const newParagraph = document.createElement('p');
    newParagraph.textContent = "You've come so far";
    newDiv.appendChild(newParagraph);

    document.body.appendChild(newDiv);
}