window.addEventListener("resize", onWindowResize)

finction onWindowResize(){
  console.log(window.innerWidth,
  window.innerHeight)

  var r = window.innerWidth / 4
  var g = window.innerHeight / 4
  var b = (evt.timeStamp/ 100)255

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"

}
