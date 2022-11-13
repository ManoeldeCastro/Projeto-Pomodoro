export default function () {
  const pressionar = new Audio(
    "https://github.com/ManoeldeCastro/Explorer/blob/main/Stage%2005%20-%20Avan%C3%A7ando%20no%20JavaScript/testando/Tempo/audio/press.wav?raw=true"
  )

  const fundoAudio = new Audio(
    "https://github.com/ManoeldeCastro/Explorer/blob/main/Stage%2005%20-%20Avan%C3%A7ando%20no%20JavaScript/testando/Tempo/audio/piano.mp3?raw=true"
  )

  const timerFim = new Audio(
    "https://github.com/ManoeldeCastro/Explorer/blob/main/Stage%2005%20-%20Avan%C3%A7ando%20no%20JavaScript/testando/Tempo/audio/fim2.mp3?raw=true"
  )

  fundoAudio.loop = true
  return {
    pressionar,
    fundoAudio,
    timerFim,
  }
}
