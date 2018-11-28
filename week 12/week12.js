var recognizer = new webkitSpeechRecognition()

recognizer.addEventLististener("result," onSpeechResult)

function onSpeechResult(evt) {
  var result = evt.results[0][0].transcript
  console.log(result)

document.body.style.backgroundColor = result

}

// when the button is click,
//begin speech recognition

var button = document.querySelector("#speech-button")
button.addEventLististener("click", omButtonClick)
function onButtonClick(){
  recognizer.start()
}
recognizer.start()
