const btn = document.getElementById("follow");

btn.addEventListener("click", function () {
  console.log("フォロー解除");
});

// 配列繰り返し処理 結果：foo foo foo
const foods = ["にんじん", "じゃがいも", "玉ねぎ"];
foods.forEach(function () {
  console.log("foo");
});
//引数与えることで結果："にんじん", "じゃがいも", "玉ねぎ"
const foods = ["にんじん", "じゃがいも", "玉ねぎ"];
foods.forEach(function (ko) {
  console.log(ko);
});
