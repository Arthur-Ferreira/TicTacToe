const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'O'
  },
]


const formElement = document.querySelector('form')
const errorsOutputElement = document.getElementById('config-errors')
const gameFieldElement = document.getElementById('game-field')
const activePlayerNameElement = document.getElementById('active-player-name')
const gameOverElement = document.getElementById('game-over')


const configOverlayElement = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop')


const editPlayer1Btn = document.getElementById('edit-player-1-name')
const editPlayer2Btn = document.getElementById('edit-player-2-name')
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')
const startGameBtnElement = document.getElementById('start-game-btn')


const gameFieldItems = document.querySelectorAll('#game-board li')


let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false



editPlayer1Btn.addEventListener('click', openPlayerCondig)
editPlayer2Btn.addEventListener('click', openPlayerCondig)
startGameBtnElement.addEventListener('click', startNewGame)

cancelConfigBtnElement.addEventListener('click', closePlayerCondig)
backdropElement.addEventListener('click', closePlayerCondig)

formElement.addEventListener('submit', savePlayerConfig)

gameFieldItems.forEach(item => {
  item.addEventListener('click', selectGameField)
})