window.alert();

window.console.log();
//→関数＝メソッド

const foo = {
  // プロパティとして扱うことになってしまう
  alert: function () { },
  //短縮規模
  alert() { }
};

// function cut(仮引数1,仮引数2) {
//   //処理
//   // return 関数の返り値;
// }
// cut(); 仮引数1を取得できる
function cut(food) {
  const cutFood = food.slice();
  //返り値はこのfunctionが何を最終的に成果物として返すか。＝返り値
  return cutFood;
}

const cutCarrot = cut(carrot); //人参
const cutPotato = cut(potato); //ジャガイモ

function throwAway() {
  //捨てる処理
  delete food;
}


function isTweetable(text){
  return text.length <= 10;
}
console.log(isTweetable("foo"));

function alertTweetable(text){
  if(text.length <=1){
    alert("you can tweet");
  }
}
alertTweetable("foo");
// →下の返り値の長さによって変わってくる


// 関数名が基本必要だが、関数名なくても動くのが匿名関数
function isTweetable(text){
  return text.length <= 10;
}

const isTweetable = function (text){
  return text.length <= 10;
}

console.log(isTweetable("Hello"));
// isTweetable("Hello");

function alertTweetable(text){
  if(text.length <=1){
    alert("you can tweet");
  }
}
alertTweetable("foo");

//高階関数を使った場合の処理
//他の子が手洗いをしたか確認する関数
//こちらのfnに他の処理をどんどんいれていく
function washed(fn, food) {
  if (/*手洗いが終えたら かつ宿題が終えたら */) {
    fn(); //コールバック関数の処理 関数略してfn
  }
}
function bring(food) {
  //食材を持ってきてもらう処理
}
function peer(food) {
  //食材の皮を向く処理
}
function cut(food) {
  //食材を切ってもらう処理
}

//下の子が手を洗ったか確認したい場合
washed(bring);

washed(peer,);

let address = window.prompt("ご住所をお願いします","東京都");
// let adress = window.alert("ご住所をお願いします。");

if(prompt){
  console.log(address);
}

//confirmメソッド
let address = window.confirm("ご住所をお願いします");
// let adress = window.alert("ご住所をお願いします。");

if(address == true){
  console.log("OKですね");
}else{
  console.log("キャンセルですね");
}
