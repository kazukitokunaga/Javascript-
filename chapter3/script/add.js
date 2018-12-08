/*
 * Dateオブジェクトでは、日付／時刻を直接加算／減算できないので、
 * getXxxxxメソッドで個々の日付／時刻を取り出し、加算／減算した結果を、
 * setXxxxxメソッドで書き戻すという手順が必要。
 */
var dat = new Date(2017, 4, 15, 11, 40);

console.log(dat.toLocaleString()); // 結果：2017/5/15 11:40:00

dat.setMonth(dat.getMonth() + 3); // 3ヶ月を加算
console.log(dat.toLocaleString()); // 結果：2017/8/15 11:40:00

dat.setDate(dat.getDate() - 20); // 20日を減算（有効範囲を超えてしまっても自動的に、前月にさかのぼって正しい日付を作り直してくれる。）
console.log(dat.toLocaleString()); // 結果：2017/7/26 11:40:00