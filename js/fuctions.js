'use strict' 

let rand_num1 = 0
let rand_num2 = 0
let correctAnswers = 0;
let incorrectAnswers = 0; 

const getRambomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomizeNumbers = () => {
    rand_num1 = getRambomIntNumberInRange(1, 10)
    rand_num2 = getRambomIntNumberInRange(1, 10)
    document.querySelector("#num1"). innerHTML = rand_num1;
    document.querySelector("#num2"). innerHTML = rand_num2;
}

const updateScoreboard = () => {
    document.querySelector("#correct-answers").textContent = correctAnswers;
    document.querySelector("#incorrect-answers").textContent = incorrectAnswers;
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
    updateScoreboard();
});

document.querySelector('button').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2

    if (answer === correctAnswer) {
        alert('Correct!');
        correctAnswers++;
    }
    else {
        alert('Incorret!');
        incorrectAnswers++;
    }

    updateScoreboard();

    randomizeNumbers()
    document.querySelector('input').value = '';

})