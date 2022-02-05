// asyncは非同期関数でawaitが使えるようになる。
//そのままだとpromiseオブジェクトがそのまま返ってくる為扱いずらい→asyncを使う。
async function callApi() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = function () {
    console.log(xhr.response);
  }
}
callApi();
