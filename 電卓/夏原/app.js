let display = document.querySelector("#display");
let btn = document.querySelectorAll('.btn');

function numCalculation(btn) {
  console.log(btn.value);
  if(btn.value >= 1 && btn.value <= 9) {
    if(display.value == 0) {
      display.value = btn.value;
    } else {
      display.value = display.value + btn.value;
    }
  } else if(btn.value == "c") {
    resetData();
  } else if(btn.value == "=") {
    display.value = eval(display.value);
  } else if(btn.value == "(") {
    if(display.value == 0){
      display.value = btn.value;
    }
  }else {
    if(display.value != 0){
      display.value = display.value + btn.value;
    }
  }
}

// 初期化
function resetData() {
  display.value = 0;
}


for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() { numCalculation(btn[i]) });
}
