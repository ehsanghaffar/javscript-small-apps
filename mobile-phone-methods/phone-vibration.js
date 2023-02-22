const vibratePhone = () => {
  if (navigator.vibrate) {
    navigator.vibrate(1000)
  } else {
    console.log("Vibration not supported")
  }
}