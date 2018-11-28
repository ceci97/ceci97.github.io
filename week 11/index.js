var box = document.querySelector("#box")
console. log(box)
box.addEventListener("click", onBoxClick)

function onBoxClick(){
  if (box.style.backgroundColor == "red"){
  box.style.backgroundColor = "blue"}
   else {
  box.style.backgroundColor = "red"
}

}
