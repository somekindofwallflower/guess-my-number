"use strict";

// Declare a const to store a random number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// declare a variable to store the max score
let score = 20;
// Give the html element with class score the value of score
document.querySelector('.score').textContent = score;
// Give the html element with class number the value of secretNumber which is random
document.querySelector('.number').textContent = secretNumber;


// Handle click event on button click
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No number!";
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "📈 Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
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
