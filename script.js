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

startGame();

function showCard() {
    const isClicked = this.classList.contains('clicked');
    const isMatched = this.classList.contains('matched');
    const canFlip = clickedCards.length < 2 && !isClicked && !isMatched;

    if (canFlip) {
        this.textContent = this.dataset.value;
        this.classList.add('clicked');
        clickedCards.push(this);

        if (clickedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    const [card1, card2] = clickedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
    } else {
        setTimeout(() => {
            card1.classList.remove('clicked');
            card2.classList.remove('clicked');
            card1.textContent = '';
            card2.textContent = '';
        }, 500);
    }
    clickedCards = [];

    if (matchedCards.length === cards.length) {
        clearInterval(interval);
        const results = document.getElementById('game-result');
        results.classList.add('game-result-win');
        setTimeout(() => results.innerHTML = 'Winner winner chick dinner!!!', 500);
    }
}

