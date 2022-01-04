/* 
    This script contains the functionality for rock, paper, scissors.
*/

/*
    computerPlay 
        Returns 'Rock', 'Paper', or 'Scissors' randomly
*/
function computerPlay() {
    // Find a random value between 0 and 3 (exclusive)
    let random_value = Math.floor(Math.random() * 3);

    // Initialize array of options
    const options = ['Rock', 'Paper', 'Scissors'];

    // Return a random option
    return options[random_value]
}

/*
    playRound
        Takes two parameters:
            playerSelection
            computerSelection
        Returns winner
*/
function playRound(playerSelection, computerSelection) {
    let winner = '';
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    switch (playerSelection) {
        /*
            Rock ties with rock
            Rock loses to paper
            Rock beats scissors
        */
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    winner = 'Tie';
                    break;
                case 'paper':
                    winner = 'Computer';
                    break;
                case 'scissors':
                    winner = 'Player';
                    break;
            }
            break;
        /*
            Paper beats rock
            Paper ties with paper
            Paper loses to scissors
        */
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    winner = 'Player';
                    break;
                case 'paper':
                    winner = 'Tie';
                    break;
                case 'scissors':
                    winner = 'Computer';
                    break;
            }
            break;
        /*
            Scissors loses to rock
            Scissors beats paper
            Scissors ties with scissors
        */
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    winner = 'Computer';
                    break;
                case 'paper':
                    winner = 'Player';
                    break;
                case 'scissors':
                    winner = 'Tie';
                    break;
            }
            break;
    }

    return winner;
}

/*
    game
        Plays a five round game
        Keeps score
        Returns winner or loser at the end

*/
function game() {

    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Enter "Rock", "Paper", or "Scissors"!').toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        let winner = playRound(playerSelection, computerSelection);
        let message = '';
        if (winner === 'Player') {
            playerWins++;
            message = `You win because ${playerSelection} beats ${computerSelection}!`;
        } else if (winner === 'Computer') {
            computerWins++;
            message = `You lose because ${computerSelection} beats ${playerSelection}!`;
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

