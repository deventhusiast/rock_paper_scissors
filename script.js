let buttons = document.querySelector('.buttons')
let playerChoiceField = document.querySelector('.player-choice')
let computerChoiceField = document.querySelector(".computer-choice")
let result = document.querySelector(".result")
let playerScorresDisplay = document.querySelector('.player-scores')
let computerScorresDisplay = document.querySelector('.computer-scores')

let dialog = document.createElement('dialog')


let computerClassFinal = ''

let playerScore = 0
let computerScore = 0

const playGame = () =>{
    buttons.addEventListener("click",(e)=>{
        if(playerScore === 5 || computerScore === 5){
            let winner = playerScore === 5 ? 'player' : 'computer'
            playerScore = 0
            computerScore = 0
            clearPlayerClasses()
            clearComputerClass()
            result.textContent = ''
            playerScorresDisplay.textContent = `${playerScorresDisplay.textContent.slice(0,-2)} ${playerScore}`
            computerScorresDisplay.textContent = `${computerScorresDisplay.textContent.slice(0,-2)} ${computerScore}`
            annouceWinner(winner)
 
        }
        else{
            setPlayerChoice(e)
            playRound()
        }

        })
        playerChoiceField.classList.remove('player-active')
        computerChoiceField.classList.remove('computer-active')
   

};


const getPlayerChoice = () =>{
    let clsPlayer = [...playerChoiceField.classList]
    let choice  = clsPlayer.pop()
    let indDash = choice.indexOf('-')
    let cls = choice.slice(indDash+1)
    return cls

}
const getComputerChoice = () =>{
    setComputerChoice()
    let indDash = computerClassFinal.indexOf('-')
    let cls = computerClassFinal.slice(indDash+1)
    return cls
}
const setPlayerChoice =(playerChoice) =>{
    let player = playerChoice.target.className
    clearPlayerClasses()
    switch (player) {
        case "paper":            
            playerChoiceField.classList.add('player-active')
            playerChoiceField.classList.add('player-paper') 
            break;
        case 'scissors':
            playerChoiceField.classList.add('player-active')
            playerChoiceField.classList.add('player-scissors') 
            break
        case 'rock':
            playerChoiceField.classList.add('player-active')
            playerChoiceField.classList.add('player-rock') 
            break;
    }
    
}

const clearPlayerClasses =() =>{
    let playerClasses = [...playerChoiceField.classList]
    if(playerClasses.length > 1){
        for (let ind = 1; ind < playerClasses.length; ind++){
            playerChoiceField.classList.remove(playerClasses[ind])
        }
    }

}

const clearComputerClass = () =>{
    let computerClasses = [...computerChoiceField.classList]
    if(computerClasses.length >1){
        for(let ind = 1; ind< computerClasses.length; ind++){
            computerChoiceField.classList.remove(computerClasses[ind])
        }
    }
}

const setComputerChoice = () =>{
    let possibleComputerChoices = [
       'computer-paper', 'computer-rock','computer-scissors'
    ] 
    const random = Math.floor(Math.random() * possibleComputerChoices.length)
    computerClassFinal = possibleComputerChoices[random] 
    let current = 0
    let cycleCount = 0
    let maxCycle = 3
    const interval = setInterval(()=>{
        let shuffledClass = possibleComputerChoices[current]

        computerChoiceField.classList.add('computer-active')
        computerChoiceField.classList.add(`${shuffledClass}`)
        
        current = (current + 1) % possibleComputerChoices.length
        cycleCount++
        setTimeout(()=>{
            computerChoiceField.classList.remove('computer-active')
            computerChoiceField.classList.remove(`${shuffledClass}`)
        },180)


        if(cycleCount === maxCycle){
            clearInterval(interval)
             
            setTimeout(() => {
                computerChoiceField.classList.add('computer-active')
                computerChoiceField.classList.add(`${computerClassFinal}`)
            }, 200);
        }
    },200)
    
}

const playRound = () =>{
   let player = getPlayerChoice()
   let computer =  getComputerChoice()
    switch (player) {
        case 'paper':
            if(computer === 'rock'){
                setTimeout(()=>result.textContent = `${player} beats ${computer}`,541)
                playerScore++
                playerScorresDisplay.textContent = `${playerScorresDisplay.textContent.slice(0,-2)} ${playerScore}`

            }
            else if(computer === 'scissors'){
                setTimeout(()=>result.textContent = `${computer} beats ${player}`,541)
                computerScore++
                computerScorresDisplay.textContent = `${computerScorresDisplay.textContent.slice(0,-2)} ${computerScore}`
            }
            else{
                setTimeout(()=>result.textContent = 'A tie round',541)
            }            
            break;
        case 'rock':
            if(computer === 'scissors'){
                setTimeout(()=>result.textContent = `${player} beats ${computer}`,541)
                playerScore++
                playerScorresDisplay.textContent = `${playerScorresDisplay.textContent.slice(0,-2)} ${playerScore}`

            }
            else if(computer === 'paper'){
                setTimeout(()=>result.textContent = `${computer} beats ${player}`,541)
                computerScore++
                computerScorresDisplay.textContent = `${computerScorresDisplay.textContent.slice(0,-2)} ${computerScore}`
            }
            else{
                setTimeout(()=>result.textContent = 'A tie round',541)
            }
            break
    
        case 'scissors':
            if(computer === 'paper'){
                setTimeout(()=>result.textContent = `${player} beats ${computer}`,541)
                playerScore++
                playerScorresDisplay.textContent = `${playerScorresDisplay.textContent.slice(0,-2)} ${playerScore}`

            }
            else if(computer === 'rock'){
                setTimeout(()=>result.textContent = `${computer} beats ${player}`,541)
                computerScore++
                computerScorresDisplay.textContent = `${computerScorresDisplay.textContent.slice(0,-2)} ${computerScore}`
            }
            else{
                setTimeout(()=>result.textContent = 'A tie round',541)
            }
            break;
    }

}


const createPopupWinner = (message, image) =>{
    let container = document.createElement('div')
    container.setAttribute("class",'dialog-wrap')
    let messageResult = document.createElement('div')
    messageResult.setAttribute('class','message-result')
    messageResult.textContent = `${message}`
    let containerImage = document.createElement('div')
    containerImage.setAttribute('class','dialog-image-container')
    if(message === 'You lost'){
        containerImage.style.background = `url(${image}),linear-gradient(129deg, rgb(51 233 167) 0%, rgb(63 129 105) 58%, rgb(9 240 240) 100%)`
        setBackground(containerImage, 'center','contain','no-repeat')
    }
    else{
        containerImage.style.background = `url(${image}),linear-gradient(129deg, rgba(133, 33, 87, 1) 0%, rgba(145, 87, 199, 1) 58%, rgba(41, 50, 170, 1) 100%)`
        setBackground(containerImage,'center','contain','no-repeat')
    }

    closeButton = document.createElement('button')
    closeButton.setAttribute('class','close-dialog')
    closeButton.textContent = 'Play Again'
    container.append(messageResult)
    container.append(containerImage)
    container.append(closeButton)
    dialog.append(container)
    document.body.appendChild(dialog)    
    closeButton.addEventListener('click',()=>dialog.close())
}

const setBackground = (element,position,size,repeat) =>{
    element.style.backgroundPosition = `${position}`
    element.style.backgroundSize = `${size}`
    element.style.backgroundRepeat = `${repeat}`


}

const annouceWinner = (winner) =>{
    if(winner === 'player'){
        dialog.replaceChildren()
        createPopupWinner('You win!', './images/thumb-up.svg')
    }
    else{
        dialog.replaceChildren()
        createPopupWinner('You lost', './images/thumb-down.svg')
    }
    dialog.showModal()
    
}
playGame()
