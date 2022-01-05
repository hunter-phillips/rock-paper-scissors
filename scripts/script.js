imgs = document.querySelectorAll('section > img');
imgs.forEach(img => img.addEventListener('click', playRound));

let playerWins = 0;
let computerWins = 0;

function computerPlay() {
    return Math.floor(Math.random() * 3).toString();
}

function playRound() {
    const playerSelection = this.id; // this refers back to the element which the function was called upon
    const computerSelection = computerPlay();
    const winning_combinations = ['20', '01', '12'];
    const roundCombination = playerSelection + computerSelection;
    const winner = document.querySelector('#round');
    const moves = ['Scissors', 'Paper', 'Rock'];

    document.querySelector('#round-winner').classList.remove('hidden');

    if (playerSelection === computerSelection) {
        winner.textContent = 'Tie!';
    } else if (winning_combinations.indexOf(roundCombination) !== -1) {
        winner.textContent = `You win! ${moves[playerSelection]} beats ${moves[computerSelection]}.`;
        score('Player');
    } else {
        winner.textContent = `The Computer wins! ${moves[computerSelection]} beats ${moves[playerSelection]}.`;
        score('Computer');
    }
}

function score(winner) {

    if (winner === 'Player') {
        playerWins++;
    } else if (winner === 'Computer') {
        computerWins++;
    }
    document.querySelector('#score').classList.remove('hidden');
    document.querySelector('#computer').textContent = `Computer: ${computerWins}`;
    document.querySelector('#player').textContent = `Player: ${playerWins}`;

    if (playerWins === 5 || computerWins === 5) {
        document.querySelector('#game-winner').classList.remove('hidden');
        document.querySelector('#game').textContent = `${winner} won the game!`;
        imgs.forEach(img => img.classList.add('hidden'));
        document.querySelector('#play-again').addEventListener('click', () => location.reload())
        document.querySelector('#play-again').classList.remove('hidden')
    }
}
