"use strict";

// Declare a const to store a random number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// declare a variable to store the max score
let score = 20;
// Give the html element with class score the value of score
document.querySelector('.score').textContent = score;
// Give the html element with class number the value of secretNumber which is random
document.querySelector('.number').textContent = secretNumber;


// Handle click event on button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No number!";
    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    // Restore initial values of the 'score'
    score = 20;
    document.querySelector('.score').textContent = score;
    // Restore initial values of the 'secretNumber'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    // Restore the initial conditions of the guess value
    document.querySelector('.guess').value = '';
    // Restore the original background color (#222) and number width (15rem)
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    // Restore the initial conditions of the message
    document.querySelector('.message').textContent = "Start guessing...";
    // Restore the initial conditions of the number
    document.querySelector('.number').textContent = "?";
})

