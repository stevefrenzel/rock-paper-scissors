(function () {
    'use strict';

    let userScore = document.getElementById('user-score');
    let computerScore = document.getElementById('computer-score');
    let userScoreValue = 0;
    let computerScoreValue = 0;
    const result = document.querySelector('.result > p');
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');

    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    
    // WIN, LOSE & DRAW
    
    function win(userChoice, computerChoice) {
        userScoreValue++;
        userScore.innerHTML = userScoreValue;
        computerScore.innerHTML = computerScoreValue;
        result.innerHTML = `${userChoice} beats ${computerChoice}. You win!`;
    }

    function lose(userChoice, computerChoice) {
        computerScoreValue++;
        computerScore.innerHTML = userScoreValue;
        computerScore.innerHTML = computerScoreValue;
        result.innerHTML = `${userChoice} loses to ${computerChoice}. You lost.`;
    }

    function draw(userChoice, computerChoice) {
        result.innerHTML = `${userChoice} equals ${computerChoice}, it's a draw...`;
    }

    function game(userChoice) {
        const computerChoice = getComputerChoice();

        switch (userChoice + computerChoice) {
            case 'RockScissors':
            case 'PaperRock':
            case 'ScissorsPaper':
                win(userChoice, computerChoice);
                break;
            case 'RockPaper':
            case 'PaperScissors':
            case 'ScissorsRock':
                lose(userChoice, computerChoice);
                break;
            case 'RockRock':
            case 'PaperPaper':
            case 'ScissorsScissors':
                draw(userChoice, computerChoice);
                break;
        }
    }

    // CHOICES

    rock.addEventListener('click', () => {
        game('Rock');
    });

    paper.addEventListener('click', () => {
        game('Paper');
    });

    scissors.addEventListener('click', () => {
        game('Scissors');
    });
    
})();