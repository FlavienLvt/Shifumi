
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
    //Affiche le choix du joueur
    let result = document.getElementById('result')
    result.innerHTML = "<h1> Player : " + pick + "</h1>"

    //Affiche le choix du bot
    let picks = ['Rock','Paper','Scissors']
    let botPick = picks[random(3)]
    result.innerHTML += "<h1> Bot : " + botPick + "</h1>"
}
