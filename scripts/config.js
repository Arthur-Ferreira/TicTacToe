function openPlayerCondig(event) {
  editedPlayer = +event.target.dataset.playerid

  configOverlayElement.style.display = 'block'
  backdropElement.style.display = 'block'
}

function closePlayerCondig() {
  configOverlayElement.style.display = 'none'
  backdropElement.style.display = 'none'
  formElement.firstElementChild.classList.remove('none')
  errorsOutputElement.textContent = ''
  formElement.firstElementChild.lastElementChild.value = ''
}


function savePlayerConfig(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const enteredPlayername = formData.get('playername').trim()
  const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`)

  if (!enteredPlayername) { // enteredPlayer === ''
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name!'
    return
  }

  updatedPlayerDataElement.children[1].textContent = enteredPlayername

  players[editedPlayer - 1].name = enteredPlayername
  closePlayerCondig()
}