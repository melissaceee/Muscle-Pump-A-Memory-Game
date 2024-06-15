let cards = [
    '1','2','3','4','5','6',
    '1','2','3','4','5','6'
];

const gameBoard = document.getElementById('game-board');
let clickedCards = [];
let matchedCards = [];
let interval

let startingTime = 30;
const timer = document.getElementById('time-left');
function updateTimer() {
    timer.innerHTML = `${startingTime}`;
    startingTime -= 1;
    if (startingTime < 0) {
        clearInterval(interval);
        const results = document.getElementById('game-result');
        results.classList.add('game-result-lost');
        setTimeout(() => results.innerHTML = 'You Lost!!!', 500);

    }
}

function shuffle(array){
    for (let i = 0; i<array.length; i++){
       let randomNumber =  Math.floor (Math.random()* array.length)
       let temp = array [i]
       array[i] = array[randomNumber]
       array [randomNumber] = temp
    }

}

function startGame() {