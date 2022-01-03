/* 
    This script contains the functionality for rock, paper, scissors.
*/

/*
    computerPlay 
        Randomly returns 'Rock', 'Paper', or 'Scissors'
*/
function computerPlay() {
    // Find a random value between 0 and 3 (exclusive)
    let random_value = Math.floor(Math.random() * 3);
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[random_value]
}