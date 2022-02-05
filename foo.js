let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "しまぶ", age: 20, teachProgramming() { } },
        { name: "あっちゃん", age: 37, teachHistory() { } },
      ],
      teach() { console.log("OK") },
    },
    entertainment: {
      youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょ" }],
      makeSmile() { }
    }
  },
  plan() { },
  uploadVideo() { }
}
//windowの中のconsoleの中のlogメソッドを出している
window.console.log();
window.alert();
window.document.getElementById();

//変数
const fooWidth = document.getElementById("foo").OffsetWidth;
const fooHeight = document.getElementById("foo").OffsetHeight;
// →上記が長い
const foo = document.getElementById("foo");

const fooWidth = foo.OffsetWidth;
const fooHeight = foo.OffsetHeight;

const fooWidth = 100; //camelCase　二つ目の単語は大文字　頭に数字は持ってこれない

export default youtuber;
