import { elements } from "./elements.js"
const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} = elements
export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play()
    timer.countdown()
    sound.buttonPressAudio.play()
  })

  buttonPause.addEventListener("click", function () {
    controls.pause()
    timer.hold()
    sound.buttonPressAudio.play()
  })

  buttonStop.addEventListener("click", function () {
    controls.reset()
    timer.reset()
    sound.buttonPressAudio.play()
  })

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
    sound.bgAudio.play()
  })

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOn.classList.add("hide")
    buttonSoundOff.classList.remove("hide")
    sound.bgAudio.pause()
  })

  buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })
  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSoundOff,
    buttonSet,
    buttonSoundOn,
  }
}
