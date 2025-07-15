function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    switch(choice){
        case 0:
            return 'scissors'
            break;
        case 1:
            return 'paper'
            break
        default:
            return 'rock'
            break;
    }
}
function getHumanChoice(){
    let userChoice = prompt('Choose rock, paper or scissors')
    return userChoice
}

function playRound(humnaChoice, computerChoice,humanScore,computerScore){
    switch (humnaChoice){
        case 'scissors':
            if(computerChoice === "paper"){
                console.log(printSingleGame("You won!", humnaChoice, computerChoice))
                humanScore+=1
            }
            else if (computerChoice === "rock"){
                console.log(printSingleGame('You lose!', computerChoice, humnaChoice))
                computerScore+=1
            }
            else{
                console.log(printSingleGame('It\'s a tie!'))
            }
            break
        case 'rock':
            if(computerChoice === 'paper'){
                console.log(printSingleGame("You won!", humnaChoice, computerChoice))
                humanScore+=1
            }
            else if(computerChoice === 'scissors'){
                console.log(printSingleGame('You lose!', computerChoice, humnaChoice))
                computerScore+=1
            }
            else{
                console.log(printSingleGame('It\'s a tie!'))
            }
            break
        default:
            if(computerChoice === 'rock'){
                console.log(printSingleGame("You won!", humnaChoice, computerChoice))
                humanScore+=1
            }
            else if(computerChoice === 'scissors'){
                console.log(printSingleGame('You lose!', computerChoice, humnaChoice))
                computerScore+=1
            }
            else{
                console.log(printSingleGame('It\'s a tie!'))
            }
            break
    }

}

function printSingleGame(startingString, winner='',loser=''){
    if (winner === ''){
        return startingString
    }
    else{
        return `${startingString} ${winner} beats ${loser}`
    }

}

function playGame(){
    let humanScore = 0, computerScore = 0
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice().toLowerCase()
        const computerSelection = getComputerChoice()
        playRound(humanSelection,computerSelection,humanScore,computerScore)
    }
    if (humanScore < computerScore){
        console.log('You won!')
    }
    else{
        console.log('Sorry! The computer won!')
    }
}
playGame()

