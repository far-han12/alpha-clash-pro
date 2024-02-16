// function play(){
// // step-1:hide the home screen . To hide the screen and the class hidden to  the home section
// const homeSection= document.getElementById("home-screen")
// homeSection.classList.add('hidden')
// // show the playground
// const playgroundSection = document.getElementById("play-ground")
// playgroundSection.classList.remove("hidden")
// }


function handleKeyboardButtonPress(event){
const playerPressed = event.key
// stop the game if player pressed esc
if(playerPressed==="Escape"){
    gameOver()
}
// get the expected to press

const currentAlphabetElement = document.getElementById("current-alphabet")
const currentAlphabet = currentAlphabetElement.innerText
const expectedAlphabet = currentAlphabet.toLowerCase()
// check  matched o not
if(playerPressed===expectedAlphabet){
    // update score
//         const currentScore = document.getElementById("current-score")
//         const currentValue= currentScore.innerText
//         const updateScore = parseInt(currentValue)
   
// const newScore = updateScore+1
// currentScore.innerText = newScore
const currentScore = getElementvalueById("current-score")
const updatedScore = currentScore+1
setElementValueById("current-score",updatedScore)


    // start a new round
    
removeBackgroundColorById(expectedAlphabet)

continueGame()


}
else{
// const currentLife =document.getElementById("current-life")
// const updatedlife =currentLife.innerText
// const updatedvalue = parseInt(updatedlife)
// const newlife = updatedvalue-1
// currentLife.innerText = newlife
const currentLife= getElementvalueById("current-life")
const updatedLife = currentLife-1
setElementValueById("current-life",updatedLife)

if(updatedLife===0){
  gameOver()
}

}



}
// capture keyboard key press

document.addEventListener("keyup",handleKeyboardButtonPress)



function continueGame(){
// step-1: generate a random alphabet
const alphabet = getARandomAlphabet()
// set randomly generated alphabate to the screen(show it)
const currentAlphabetElement=document.getElementById("current-alphabet")
currentAlphabetElement.innerText=alphabet
// set background color
addBackGroundColorById(alphabet)
updateScore()
}





function play(){
    hideElementById("home-screen")
    hideElementById("final-score")
    showElementById('play-ground')
// reset score
setElementValueById("current-life",5)
setElementValueById("current-score",0)

    continueGame()
}

function gameOver(){
    hideElementById("play-ground")
    showElementById("final-score")   
    // update final score
    const lastScore = getElementvalueById("current-score")
    setElementValueById("game-score",lastScore)
    // clear the last selected alphabet highlight
const alphabet =getElementTextById("current-alphabet")
removeBackgroundColorById(alphabet)
}