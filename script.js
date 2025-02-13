const messages = [
    "Tem certeza?",
    "Realmente tem certeza??",
    "Está mesmo certo disso?",
    "Amor, por favor...",
    "Pense bem nisso!",
    "Se você disser não, eu vou ficar muito triste...",
    "Eu vou ficar muito triste...",
    "Eu vou ficar muito muito muito triste...",
    "Ok, tudo bem, vou parar de perguntar...",
    "Brincadeira, diga sim, por favor! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}