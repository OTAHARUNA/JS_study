const button = document.getElementById("addBtn");
const lists = document.getElementById("lists");


button.addEventListener("click", async function () {
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // //jsonで受け取り、データをusersに入れてあげる
  const users = await res.json();

  // DOM操作 ユーザーの名前をリストにいれていく
  users.forEach(function (user) {
    if (user.id < 5) {
      const list = document.createElement("li"); //HTML要素を生成できる
      list.innerText = user.name;
      lists.appendChild(list);
    }
  });
})
window.addEventListener("load", async function () {
  //データのやり取り
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // //jsonで受け取り、データをusersに入れてあげる
  const users = await res.json();
  users.forEach(function (user) {
    if (user.id < 5) {
      const list = document.createElement("li"); //HTML要素を生成できる
      list.innerText = user.name;
      lists.appendChild(list);
    }
  });
})
