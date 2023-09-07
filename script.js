
let picks = ['Rock','Paper','Scissors']
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

rock.addEventListener('click', () =>{
    displayGame(picks[0],botRandomPicker())
})
paper.addEventListener('click', () =>{
    displayGame(picks[1],botRandomPicker())
})
scissors.addEventListener('click', () =>{
    displayGame(picks[2],botRandomPicker())
})

/**
 * This function pick a random number
 * @param {*Range for the random} max 
 * @returns 
 */
function random(max) {
    return Math.floor(Math.random() * max)
}

/**
 * This function return the random value, that is a pick for the array picks
 * @returns 
 */
function botRandomPicker(){
    let randomBotPick = picks[random(3)]
    return randomBotPick
}

/**
 * This function is used to diplay element in the html page
 * @param {*Contain an value from picks array that is used for the player pick} playerPick 
 * @param {*Contain an value from picks array that is used for the bot pick} botPick 
 */
function displayGame(playerPick, botPick){
    //Display player pick
    let gamestatus = document.getElementById('pick')
    gamestatus.innerHTML = "<h1> Player : " + playerPick + "</h1>"

    //Display bot pick
    gamestatus.innerHTML += "<h1> Bot : " + botPick + "</h1>"

    //Display game issue
    let result = document.getElementById('result')
    result.innerHTML = gameIssue(playerPick,botPick)
}

/**
 * This function is used to compare values from the player and the bot,
 * and it tell who win or if it's a tie
 * @param {*Contain an value from picks array that is used for the player pick} playerPick 
 * @param {*Contain an value from picks array that is used for the bot pick} botPick 
 * @returns 
 */
function gameIssue(playerPick, botPick){
    //Game issue
    if(playerPick == botPick) return "<p> Tie </p>"
    if(playerPick == picks[1] && botPick == picks[0]) return "<p> Win </p>"
    if(playerPick == picks[2] && botPick == picks[1]) return "<p> Win </p>"
    if(playerPick == picks[0] && botPick == picks[2]) return "<p> Win </p>"
    else return "<p> Lose </p>"
}
