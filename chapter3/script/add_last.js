var dat = new Date(2017, 4, 15, 11, 40);

console.log(dat.toLocaleString()); // 結果：2017/5/15 11:40:00

dat.setMonth(dat.getMonth() + 1); // 来月の...
dat.setDate(0); // 0日目をセット
// 来月の0日目は、Dateオブジェクトでは今月の最終日としてみなされる。
console.log(dat.toLocaleString()); // 結果：2017/5/31 11:40:00
