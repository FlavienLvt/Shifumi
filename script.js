
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

function result(pick){
    let result = document.getElementById('result')
    result.innerHTML = "<h1> Player : " + pick + "</h1>"

}
