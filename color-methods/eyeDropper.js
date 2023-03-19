const colorDiv = document.getElementById("color")
const colorCode = document.getElementById("colorCode")

function eyeDropperHandler() {
  const eyeDropper = new EyeDropper();
  eyeDropper.open().then((res) => {
    console.log(res)
    colorDiv.style.background = res.sRGBHex
    colorCode.innerText = res.sRGBHex
  })
}