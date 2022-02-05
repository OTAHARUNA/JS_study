//コールバック関数に関して理解する
function unfollow() {
  console.log("フォーローを外します");
}

function cancelTweet() {
  console.log("ツイートをキャンセルします");
}

//確認すると実行する事を作りたい

function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    //trueがかえってきたらfn実行
    fn();
  }
}

confirmed(unfollow);

// 匿名関数いれた場合
//コールバック関数に関して理解する
function unfollow() {
  console.log("フォーローを外します");
}

function cancelTweet() {
  console.log("ツイートをキャンセルします");
}

//確認すると実行する事を作りたい

function confirmed(fn) {
  if (window.confirm("実行しますか？")) {
    //trueがかえってきたらfn実行
    fn();
  }
}

confirmed(unfollow);

//GitHubリポジトリ削除実行
function confirmed(fn){
  const input = window.prompt("実行しますか");
  if(input == "実行"){
    fn();
  }
}
confirmed(function(){
  console.log("リポジトリを削除");
});

// 引数を次のfunctionに引き継ぐ
function confirmed(fn){
  const input = window.prompt("実行しますか");
  fn(input);
}

confirmed(function(input){
    if(input == "実行"){
    console.log("リポジトリを削除");
    }
});
