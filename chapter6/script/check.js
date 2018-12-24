document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function () {
    // 選択値を格納するための配列
    var result = [];
    var foods = document.getElementsByName('food');

    // チェックボックスを走査し、チェック状態にあるか確認
    for (var i = 0, len = foods.length; i < len; i++) {
      var food = foods.item(i);
      // チェックされている項目の値を配列に追加
      if (food.checked){
        // ラジオボタンがチェックされているかどうかを表すのはcheckedプロパティ。（valueプロパティは、選択の有無にかかわらず、value属性で指定された値を返す。）
        result.push(food.value);
      }
    }
    // 配列の内容をダイアログに出力
    window.alert(result.toString());
  }, false);
}, false);