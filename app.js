
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60 // empieza en 60
let timerId = null

function randomSquare() {
    squares.forEach(square => {
      square.classList.remove('mole') // si existe la clase mole se la saco
    })
  
    let randomSquare = squares[Math.floor(Math.random() * 9)] // agarro un cuadrado random
    randomSquare.classList.add('mole')
  
    hitPosition = randomSquare.id // id de ese cuadrado
  }
  
  squares.forEach(square => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) { // si le pego a ese id
        result++ // sumamos al resultado
        score.textContent = result // voy actualizando el resultado
        hitPosition = null // para poder volverle a pegar
      }
    })
  })//

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare,500)
}

moveMole()

function countDown() {
    currentTime-- // empiezo a restar el tiempo
    timeLeft.textContent = currentTime // actualizo el tiempo q queda
   
    if (currentTime == 0) { // si el tiempo es = a 0 
      clearInterval(countDownTimerId) 
      clearInterval(timerId)// lo termino / lo freno al tiempo
      alert('GAME OVER! Your final score is ' + result) 
      //alerto q el juego termino y cuanto es mi resultado final
    }
   
   }

   let countDownTimerId = setInterval(countDown, 1000)
   // invoco la funcion countDown con un set interval para ir descontando el tiempo
   // lo termino / freno arriba con la funcion countDown