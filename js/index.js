import Sounds from "./sound.js"

const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")
const minutesTela = document.querySelector("#minutes")
const secondsTela = document.querySelector("#seconds")
let minutes = Number(minutesTela.textContent)
let contar

const sound = Sounds()

//resetar controles
function resetar() {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  buttonStop.classList.add("hide")
  buttonSet.classList.remove("hide")
  atualizar(minutes, 0)
}
// Atualizar minutes no escopo global e local
function atualizar(minutes, seconds) {
  minutesTela.textContent = String(minutes).padStart(2, "0")
  secondsTela.textContent = String(seconds).padStart(2, "0")
}

// Iniciar contagem
function play() {
  contar = setTimeout(() => {
    let minutes = Number(minutesTela.textContent)
    let seconds = Number(secondsTela.textContent)
    atualizar(minutes, 0)
    if (minutes <= 0 && seconds <= 0) {
      resetar()
      sound.timerFim.play()
      return
    }
    if (seconds <= 0) {
      seconds = 2
      --minutes
    }

    atualizar(minutes, String(seconds - 1))
    play()
  }, 1000)
}
//eventos
buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  buttonStop.classList.remove("hide")
  buttonSet.classList.add("hide")
  play()
  sound.pressionar.play()
})

buttonPause.addEventListener("click", () => {
  buttonPlay.classList.remove("hide")
  buttonPause.classList.add("hide")
  clearTimeout(contar)
  sound.pressionar.play()
})

buttonStop.addEventListener("click", () => {
  resetar()
  clearTimeout(contar)
})
buttonSet.addEventListener("click", () => {
  var newMinutes = prompt("Quantos minutos?")
  if (!newMinutes) {
    return false
  }
  minutes = minutesTela.textContent = Number(newMinutes)
  atualizar(minutes, 0)
  return minutes
})

buttonSoundOn.addEventListener("click", () => {
  buttonSoundOn.classList.add("hide")
  buttonSoundOff.classList.remove("hide")
  sound.fundoAudio.pause()
})
buttonSoundOff.addEventListener("click", () => {
  buttonSoundOn.classList.remove("hide")
  buttonSoundOff.classList.add("hide")
  sound.fundoAudio.play()
})
