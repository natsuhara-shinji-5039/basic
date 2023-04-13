let img = document.querySelector("#img-data");
let num1 = 0;

// 画像変更
function changeImg() {
  if ((num1 % 2) == 0) {

  } else {

  }
  num1 = num1 + 1;
console.log(num1);
  if (img.getAttribute("src") == "img/24022618_s.jpg") {
    img.src = "img/dog.jfif";
  } else {
    img.src = "img/24022618_s.jpg";
  }
}
console.log(img.src);
console.log(img.getAttribute("src"));
img.addEventListener("click", changeImg);

let display_comment = document.querySelector("#display");
let comment = document.querySelector("#comment");
let btn = document.querySelector("#button1");

function changeText() {
  console.log('test');
  display_comment.innerHTML = comment.value;
}

console.log('test2');
btn.addEventListener("click", changeText);
console.log('test3');