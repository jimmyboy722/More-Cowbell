export function moreCowbell() {
    console.log();
}

function moreCowbell() {
    const newDiv = document.createElement('div');
    div.classList.toggle('moreCowbell');

    const newImg = document.createElement('img');
    img.src = 'Main\assets\images\will-ferrell-cowbell-gif.gif';
    img.alt = 'Will Ferrell playing the cowbell';
    img.style.borderRadius = '15px';
    newDiv.appendChild(newImg);

    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Mike is awesome!';
    newDiv.appendChild(newParagraph);

    document.body.appendChild(newDiv);
}