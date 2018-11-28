var box = document.querySelector("#square")
box.addEventListener("click", onBoxClick)

function onBoxClick(){
  if(getElementById('square').src == '1.png'){
    getElementById('square').src = '2.png'
  }
  console.log("clicked");
}
