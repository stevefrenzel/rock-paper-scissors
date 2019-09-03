# Rock, Paper, Scissors

<img src='screenshot-rock-paper-scissors.png' alt='Rock, Paper, Scissors'>

## 1. Description 📝

A classic "Rock, Paper, Scissors" game utilising HTML, CSS and JavaScript. If the user and computer make the same choice it's a draw, otherwise the following rules will apply:

- Rock beats scissors
- Paper beats rock
- Scissors beat paper

## 2. Structure 🗂

This app is as basic as can be! `index.html` contains the content, `style.css` the visual appearance and `script.js` the logic and functionality.

The `index.html` has four elements:

1. Header
2. Counter
3. Result message
4. Restart

In the counter element, the computer choice will be randomly generated:

```javascript
function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
```

Depending on the choice of the user inside the `choices-wrapper`element, either the `win()`, `lose()` or `draw()` function will run. Each one indicates the result by a flash of green, red or gray color on the whole screen. It will also display the symbol the user chose:

```javascript
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
```

To restart the game, an eventListener will check if the value of `userScoreValue` or `computerScoreValue` is above 0. If so, both values will be set to 0 again and the symbols will be deleted:

```javascript
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
```