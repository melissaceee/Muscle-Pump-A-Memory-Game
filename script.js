let cards = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
];

const gameBoard = document.getElementById('game-board');
let clickedCards = [];
let matchedCards = [];
let interval

let startingTime = 45;
const timer = document.getElementById('time-left');

function updateTimer() {
    timer.innerHTML = `${startingTime}`;
    startingTime -= 1;
    if (startingTime < 0) {
        clearInterval(interval);
        const results = document.getElementById('game-result');
        results.classList.add('game-result-lost');
        setTimeout(() => results.innerHTML = 'You Lose, try again!!!', 500);

    }
}

function shuffle(array) {
    for (let i = 0; i < array.length; i++) {
        let randomNumber = Math.floor(Math.random() * array.length)
        let temp = array[i]
        array[i] = array[randomNumber]
        array[randomNumber] = temp
    }

}

function startGame() {
    shuffle(cards);
    const cardValue = document.querySelectorAll('.card');
    cardValue.forEach((div, index) => {
        div.dataset.value = cards[index];
        div.addEventListener('click', showCard);
    })

    showAllCards();
    setTimeout(hideAllCards, 5000)
}

function showAllCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.textContent = card.dataset.value;
    });
}

function hideAllCards() {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => {
        card.textContent = '';
    });

    interval = setInterval(updateTimer, 1000);
}

// still can not test the game but can see the format (html and css)