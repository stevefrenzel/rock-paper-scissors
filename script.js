(function () {
    'use strict';

    let userScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');
    let userScoreValue = 0;
    let computerScoreValue = 0;
    const wrapper = document.querySelector('.wrapper');
    const result = document.querySelector('.result > p');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const restart = document.querySelector('.restart');
    const displayLeft = document.querySelector('#display-left > span');
    const displayRight = document.querySelector('#display-right > span');

    // USER CHOICE

    rock.addEventListener('click', () => { game('Rock'); });
    paper.addEventListener('click', () => { game('Paper'); });
    scissors.addEventListener('click', () => { game('Scissors'); });

    // COMPUTER CHOICE

    const getComputerChoice = () => {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    };

    // MAIN LOGIC

    const game = (userChoice) => {
        const computerChoice = getComputerChoice();

        // DETERMINE WINNER, LOSER OR DRAW

        if (
            (userChoice === 'Rock' && computerChoice === 'Scissors') ||
            (userChoice === 'Paper' && computerChoice === 'Rock') ||
            (userChoice === 'Scissors' && computerChoice === 'Paper')) {
            win(userChoice, computerChoice);
            wrapper.classList.add('green-glow');
            setTimeout(() => wrapper.classList.remove('green-glow'), 300);
        } else if (
            (userChoice === 'Rock' && computerChoice === 'Paper') ||
            (userChoice === 'Paper' && computerChoice === 'Scissors') ||
            (userChoice === 'Scissors' && computerChoice === 'Rock')) {
            lose(userChoice, computerChoice);
            wrapper.classList.add('red-glow');
            setTimeout(() => wrapper.classList.remove('red-glow'), 300);
        } else {
            draw(userChoice, computerChoice);
            wrapper.classList.add('gray-glow');
            setTimeout(() => wrapper.classList.remove('gray-glow'), 300);
        }

        // SHOW USER CHOICE

        if (userChoice === 'Rock') {
            displayLeft.innerHTML = '<i class="far fa-hand-rock"></i>';
        } else if (userChoice === 'Paper') {
            displayLeft.innerHTML = '<i class="far fa-hand-paper"></i>';
        } else {
            displayLeft.innerHTML = '<i class="far fa-hand-scissors"></i>';
        }

        // SHOW COMPUTER CHOICE

        if (computerChoice === 'Rock') {
            displayRight.innerHTML = '<i class="far fa-hand-rock"></i>';
        } else if (computerChoice === 'Paper') {
            displayRight.innerHTML = '<i class="far fa-hand-paper"></i>';
        } else {
            displayRight.innerHTML = '<i class="far fa-hand-scissors"></i>';
        }
    };

    // SHOW RESULT
    
    const win = (userChoice, computerChoice) => {
        userScoreValue++;
        userScore.innerHTML = userScoreValue;
        computerScore.innerHTML = computerScoreValue;
        result.innerHTML = `${userChoice} beats ${computerChoice}. <u>You win!</u>`;
    };

    const lose = (userChoice, computerChoice) => {
        computerScoreValue++;
        computerScore.innerHTML = computerScoreValue;
        userScore.innerHTML = userScoreValue;
        result.innerHTML = `${userChoice} loses to ${computerChoice}. <u>You lost.</u>`;
    };

    const draw = (userChoice, computerChoice) => {
        result.innerHTML = `${userChoice} equals ${computerChoice}, it's a <u>draw</u>...`;
    };

    // RESTART

    restart.addEventListener('click', () => {
        if (userScoreValue > 0 || computerScoreValue > 0) {
            userScoreValue = 0;
            userScore.innerHTML = userScoreValue;
            computerScoreValue = 0;
            computerScore.innerHTML = computerScoreValue;
            result.innerHTML = 'Make a move:';
            displayLeft.innerHTML = '<span></span>';
            displayRight.innerHTML = '<span></span>';
        }
    });
    
})();