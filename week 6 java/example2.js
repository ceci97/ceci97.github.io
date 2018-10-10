var name = window.prompt("What is Your Name?")

document.write("<p>")
document.write("Hello " + name)
document.write("</p>")

if (Math.random() < .5) {
document.write("You Win!")
} else{
  document.write("You Lose!")

}

document.write("</p>")
