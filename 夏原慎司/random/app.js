let result = document.querySelector('#result');
let match = document.querySelector('#match');
let num = Math.floor(Math.random() * 7);

result.innerHTML = num;

if(1 >= num && num <=3) {
  match.innerHTML = "負け";
} else {
  match.innerHTML = "勝ち";
}


// function rollDice() {
//   let num = Math.floor(Math.random() * 7);
//   display.innerHTML = "さいころの目は" + num + "です";
// }

// btn.addEventListener('click', rollDice);
