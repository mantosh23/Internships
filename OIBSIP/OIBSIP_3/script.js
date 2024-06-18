let input = document.querySelector("#input");
let units = document.querySelector("#units");
let submit = document.querySelector("#convert");
let display = document.querySelector(".val");
let body = document.querySelector("body");


submit.addEventListener("click",()=>{
  let val = input.value;
  convert(val);
})

function convert(val){
  if(units.value === "Fahrenheit"){
    display.innerText = `${val}°F = ${Math.round((val -32) * 5/9)}°C`;
  }
  else if(units.value === "Celsius"){
    display.innerText = `${val}°C = ${Math.round((val * 9/5) + 32)}°F`;
  }
}

setInterval(() => {

  let ran = random();
  body.style.backgroundColor=ran;
}, 2000);




function random(){
  let red = Math.floor(Math.random() *255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);

  let randomColor = `rgb(${red},${green},${blue})`;
  return randomColor;
}