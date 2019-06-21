const choices = document.querySelectorAll('.choice');

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

const resultComp = document.querySelector('#resultComp');
const win = document.querySelector('#win');

const btn = document.querySelector('button');


btn.style.display = 'none';

//Score board that keeps track of the result
const scoreBoard = {
    round: 0,
    p: 0,
    c: 0,
    t: 0
}

//Loop through each node with choice class
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const player = e.target.id;
        const computer = computerGuess();
        const winner = isWin(player, computer);
        changeScoreBoard(winner, computer);
        btn.style.display = '';
    })
})

/**
 * Get a random choice
 * @param none
 * @return {string} rock, paper or scissor
 */
function computerGuess() {
    const rand = Math.random();
    return (rand < 0.34) ? "rock" : (rand < 0.67 ? "paper" : "scissor");
}

/**
 * Chooses the winner based on bool logic
 * @param p player choice
 * @param c computer choise
 * @return Name of the winners or draw
 */
function isWin(p, c) {
    if (p === c) {
        scoreBoard.t++;
        return "draw";
    } else if (p === "rock" && c === "paper" || p === "paper" && c === "scissor" || p === "scissor" && c === "rock") {
        scoreBoard.c++;
        return "computer wins"
    } else if (c === "rock" && p === "paper" || c === "paper" && p === "scissor" || c === "scissor" && p === "rock") {
        scoreBoard.p++;
        return "player wins"
    } else {
        return "Wrong Format"
    }
}

/**
 * Change the DOM elements based on the outcome
 * @param winner winner string
 * @param c computer choise
 */

function changeScoreBoard(winner, c) {
    player.innerHTML = `<p>Player : ${scoreBoard.p}`
    computer.innerHTML = `<p>Computer : ${scoreBoard.c}`
    ties.innerHTML = `<p>Ties : ${scoreBoard.t}`
    resultComp.innerHTML = `<p>Computer Chose : ${c}`

    if (winner === "player wins") {
        win.innerHTML = `<h1 id="win">You win</h1>`
        win.style.color = "#00a04a";
    } else if (winner === "computer wins") {
        win.innerHTML = `<h1 id="win">You Lose</h1>`
        win.style.color = "#e01f3d";
    } else {
        win.innerHTML = `<h1 id="win">Tie</h1>`
        win.style.color = "#37333e";
    }
}


btn.addEventListener('click', () => {
    location.reload()
});