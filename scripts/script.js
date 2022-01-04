function computerPlay() {
    return Math.floor(Math.random() * 3);
}

function convertMove(move) {
    const moves = { rock: 2, paper: 1, scissors: 0 };
    return moves[move.toLowerCase()]
}

function playRound(playerSelection, computerSelection) {
    const winning_combinations = ['20', '01', '12'];
    const roundCombination = playerSelection.toString() + computerSelection.toString();

    if (playerSelection === computerSelection) {
        return 'Tie';
    } else if (winning_combinations.indexOf(roundCombination) !== -1) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function game() {
    const moves = ['Scissors', 'Paper', 'Rock']
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = convertMove(prompt('Enter "Rock", "Paper", or "Scissors"!'));
        const computerSelection = computerPlay()

        let winner = playRound(playerSelection, computerSelection);
        let message = '';
        if (winner === 'Player') {
            playerWins++;
            message = `You win because ${moves[playerSelection]} beats ${moves[computerSelection]}!`;
        } else if (winner === 'Computer') {
            computerWins++;
            message = `You lose because ${moves[computerSelection]} beats ${moves[playerSelection]}!`;
        } else {
            message = `Tie!`;
        }
        console.log(message);
    }
    if (playerWins > computerWins) {
        console.log('Player Wins!');
    } else if (playerWins === computerWins) {
        console.log('Tie!');
    } else {
        console.log('Computer Wins!');
    }
}

