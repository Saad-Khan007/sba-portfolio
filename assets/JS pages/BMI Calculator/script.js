let button = document.querySelector("button");  
let body = document.querySelector("body");  
button.addEventListener("click",bmi);
body.addEventListener("load",bmi);
let con = document.getElementById("con");
function bmi() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let res = document.getElementById("res");
    height = height/100;
    height = height*height;
    console.log(weight);
    res.value = (weight / height).toFixed(2);
    if(res.value < 18.5){
        setStyle("yellow","900","Underweight")
    }
    else if(res.value >= 18.5 && res.value <= 24.9){
        setStyle("greenyellow","900","Normal weight")
    }
    else if(res.value >= 25 && res.value <= 29.9){
        setStyle("orange","900","Overweight")
    }
    else if(res.value >= 30 && res.value <= 40){
        setStyle("red","900","Obesity")
    }
    else{
        setStyle("rgba(0, 212, 255, 1)","900","You're Already Dead..")
    }
}
function setStyle(color, fontWeight, text) {
    con.style.color = color;
    con.style.fontWeight = fontWeight;
    con.innerHTML = text;
  }