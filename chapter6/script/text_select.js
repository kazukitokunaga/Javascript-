// 入力ボックス／選択ボックスの値を取得するのは簡単で、valueプロパティにアクセスするだけ。
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function () {
    var name= document.getElementById('name');
    console.log(name.value);
  }, false);
}, false);