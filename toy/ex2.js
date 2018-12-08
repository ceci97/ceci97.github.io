
var arrow = document.getElementById("arrow")
document.addEventListener("mousemove", handleArrow)

function handleArrow(evt) {
var tag = evt.target.tagName.toLowerCase()

if (tag == "a" || tag == "button") {
    arrow.style.animationPlayState = "running"
} else {
    arrow.style.animationPlayState = "paused"
}
    arrow.style.left = evt.pageX - 80 + "px"
    arrow.style.top = evt.pageY - 80 + "px"
}

function myPlayFunction() {
    document.getElementById("myDIV").style.WebkitAnimationPlayState = "running";
    document.getElementById("myDIV").style.animationPlayState = "running";
}

function myPauseFunction() {
    document.getElementById("myDIV").style.WebkitAnimationPlayState = "paused";
    document.getElementById("myDIV").style.animationPlayState = "paused";
}

document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    alert ("Let's Go!");
}

document.addEventListener("mousemove", handleMouseMove)

function handleMouseMove(evt) {
    console.log(evt)
}

function changepicture() {
  document.getElementById("balloon").src = "2.png";
  console.log("click")
}

function changepicture2() {
  document.getElementById("balloon2").src = "2.png";
  console.log("click")
}

function changepicture3() {
  document.getElementById("balloon3").src = "2.png";
  console.log("click")
}

function changepicture4() {
  document.getElementById("balloon4").src = "2.png";
  console.log("click")
}
