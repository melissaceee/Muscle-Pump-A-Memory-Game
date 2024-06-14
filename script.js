    const cards = [
        '1','2','3','4','5','6','7','8','9','10',
        '1','2','3','4','5','6','7','8','9','10'
    ];

    const gameBoard = document.getElementById ('game-board')

    let flippedCards = [];
    let matchedCards = [];


    let startingTime = 5 
    const timer = document.getElementById('time-left');
    function updateTimer (){
        timer.innerHTML = `${startingTime}`
        startingTime-=1 
        if(startingTime < 0) {
            clearInterval (interval);
            const results = document.getElementById('game-result');  
            results.innerHTML = `${'You Lost!!!'}`
        }
    }
    const interval = setInterval(updateTimer, 1000) 
    
    function shuffle(array){
        for (let i = 0; i<array.length; i++){
           let randomNumber =  Math.floor (Math.random()* array.length)
           let temp = array [i]
           array[i] = array[randomNumber]
           array [randomNumber] = temp
        }

    }

    function resetGame(){
        shuffle[cards]
        cards.forEach (cardValue=>{
            const div = document.createElement('div');
            div.classList.add('card');
            div.dataset.value =cardValue;
            
        })
    }



 


