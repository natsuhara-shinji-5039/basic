// ボタン処理
let morning_btn = document.querySelector("#morning-btn");
let night_btn = document.querySelector("#night-btn");
let calculation_btn = document.querySelector("#calculation-btn");
let comment = document.querySelector("#comment");

function goodMorning() {
  comment.innerHTML = "おはよう";
}

function goodNight() {
  comment.innerHTML = "おやすみ";
}

function calculationSum() {
  let sum = 0;
  for(let i = 1; i <= 100; i ++) {
    sum = sum + i;
  }
  comment.innerHTML = sum;
}

morning_btn.addEventListener("click", goodMorning);
night_btn.addEventListener("click", goodNight);
calculation_btn.addEventListener("click", calculationSum);