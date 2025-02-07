'use strict';



// document.querySelector('.message');
// console.log(document.querySelector('.message').textContent);
// //using Dom to sellect any element in Html

// // documnet.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 10;

// document.querySelector('.number').textContent = 13;

// console.log(document.querySelector('.guess').value = 19);



//defining the secret number of the game
const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber; //displaying random number


//showing score varaible
let score = 20;


document.querySelector('.check').addEventListener('click',function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);  //this will return the guessed number

    if(!guess) {
        document.querySelector('.message').textContent = 'No Number!❌';
        
    //when we dont guess the number in the game
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number🎉';

         
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high😒';
            score--;
            document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You lost the game💩';
            document.querySelector('.score').textContent = 0;
        }
       



    }else if(guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low 🤷‍♂️';
            score--;
            document.querySelector('.score').textContent = score;

        }else {
            document.querySelector('.message').textContent = 'You lost the game💩';
            document.querySelector('.score').textContent = 0;
        }
       
    }

});