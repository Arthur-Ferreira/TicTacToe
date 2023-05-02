const configOverlayElement = document.getElementById('config-overlay')
const backdropElement = document.getElementById('backdrop')
const cancelConfigBtnElement = document.getElementById('cancel-config-btn')

const editPlayer1Btn = document.getElementById('edit-player-1-name')
const editPlayer2Btn = document.getElementById('edit-player-2-name')


editPlayer1Btn.addEventListener('click', openPlayerCondig)
editPlayer2Btn.addEventListener('click', openPlayerCondig)

cancelConfigBtnElement.addEventListener('click', closePlayerCondig)
backdropElement.addEventListener('click', closePlayerCondig)