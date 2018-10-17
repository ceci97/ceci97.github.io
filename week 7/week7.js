function updateTimeConditional(){
var timeHolder =
document.querySelector("#time")

var now = new Date()
var time = now.toTimeString();

timeHolder.innerHTML =time
}
setInterval(updateTimeConditional, 1000)

//date.getSeconds()

/*if (date.getSconds() < 30){
console.log("!")
}
*/
