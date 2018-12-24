/*
 * getElementByNameメソッドは、name属性をキーに要素を取得する。
 * 一般的には、<input>/<select>などフォーム要素へのアクセスで利用する。
 * ただし、単一の要素を取得するならgetElementByIdメソッドのほうがコードもシンプルになる。
 * 用途としては、ラジオボタン／チェックボックスなど、name属性が等しい要素郡を取得するような場合に限られる。
 */
var current = new Date();
// <input name="time">要素を取得
var nam = document.getElementsByName('time');
// そのvalue属性を設定
nam[0].value = current.toLocaleTimeString();

