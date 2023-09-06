
let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')

rock.addEventListener('click', () =>{
    result("Rock")
})
paper.addEventListener('click', () =>{
    result("Paper")
})
scissors.addEventListener('click', () =>{
    result("Scissors")
})

function random(max) {
    return Math.floor(Math.random() * max);
}

function result(pick){
    //Display player pick
    let gamestatus = document.getElementById('pick')
    gamestatus.innerHTML = "<h1> Player : " + pick + "</h1>"

    //Display bot pick
    let picks = ['Rock','Paper','Scissors']
    let botPick = picks[random(3)]
    gamestatus.innerHTML += "<h1> Bot : " + botPick + "</h1>"

    //Game issue
    let result = document.getElementById('result')
    if(pick = botPick)result.innerHTML += "<p> Tie </p>"
    if(pick = "Paper" && botPick == "Rock")result.innerHTML ="<p> Win </p>"
    if(pick = "Scissors" && botPick == "Paper")result.innerHTML ="<p> Win </p>"
    if(pick = "Rock" && botPick == "Scissors")result.innerHTML ="<p> Win </p>"
    //else result.innerHTML = "<p> Lose </p>"
}
