function updateTime(){
  var timeHolder =
  document.querySelector("#time")

  var now = new Date()
  var time = now.toTimeString();

  var s1 = document.querySelector(".s1")
  var s2 = document.querySelector(".s2")
  var s3 = document.querySelector(".s3")
  var s5 = document.querySelector(".s5")
  var s6 = document.querySelector(".s6")

  //timeHolder.innerHTML =time;
  if(now.getSeconds()%2 !=1){
    s1.style.borderColor = "lightskyblue";

  }else{
    s1.style.borderColor = "bisque";
  }
  if(now.getSeconds()%5 ==0){
    s2.style.borderColor = "DarkSalmon";

  }else{
    s2.style.borderColor = "pink";
  }

  if(now.getSeconds()%60 ==0){
    s3.style.borderColor = "#90EE90";

  }else{
    s3.style.borderColor = "#DAA520";
  }


if(now.getSeconds()%7 ==0){
  s5.style.borderColor = "LightSteelBlue";

}else{
  s5.style.borderColor = "LightSeaGreen";
}

if(now.getSeconds()%2 !=1){
  s6.style.borderColor = "yellow";

}else{
  s6.style.borderColor = "white";
}

  }
setInterval(updateTime, 1000)
