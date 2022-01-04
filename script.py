import random
import math

def moveValue(move):
    moves = {'Rock': 2, 'Paper': 1, 'Scissors':0}
    return moves[move]

def determineWinner(player, computer):
    winning_moves = ['12','20', '01']
    winning_move = str(player) + str(computer)
    
    if player == computer:
        return 'tie'
    elif winning_move in winning_moves:
        return 'player'
    else:
        return 'computer'

def computerMove():
    return int(math.floor(random.random() *3))

def playRound():
    player = moveValue(input().title())
    computer = computerMove()
    move = {2:'Rock', 1: 'Paper', 0: 'Scissors'}
    print('Player', move[player], 'Computer', move[computer])
    print(determineWinner(player, computer))

playRound()

