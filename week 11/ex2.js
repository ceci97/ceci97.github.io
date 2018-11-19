var box = document.querySelector("#box")
console. log(box)
box.addEventListener("mousemove", onMouseMove)

function onMouseMove(){
  console.log(evt)
  // get the movementX / Y properties from evt
var x = evt.x
var y = evt.y

console.log(x, y)

  // connect those values to top / left CSS of box
  box.style.left = x + "px"
  box.style.top = y + "px"
}
