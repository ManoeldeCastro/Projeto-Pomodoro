import Controls from "./controls.js"
import Timer from "./timer.js"
import { elements } from "./elements.js"
import Sound from "./sounds.js"
import Events from "./events.js"

const {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay,
} = elements

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
})
const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

Events({ controls, timer, sound })
