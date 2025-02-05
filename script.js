const messages = [
    "Y NO🧐",
    "Dafuq🤨",
    "Ki gagn??",
    "To tap NO mem",
    "u mf",
    "yooo",
    "u want me sad..",
    "mauvaissss",
    "come on kii nooo",
    "PRESSS YESSS!❤️"
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