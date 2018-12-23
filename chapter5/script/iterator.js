let data_ary = ['one', 'two', 'three'];
let data_str = 'あいうえお';
let data_map = new Map([['MON', '月曜'], ['TUE', '火曜'], ['WED', '水曜']]);

for(let d of data_ary){
  console.log(d); // 結果：one、two、three
}

for(let d of data_str){
  console.log(d); // 結果：あ、い、う、え、お
}

for (let [key, value] of data_map) {
  console.log('${key} : ${value}'); // 結果： MON:月曜, TUE:火曜, WED:水曜
}
/*
 * イテレーターとは、オブジェクトの内容を列挙するためのしくみを備えたオブジェクト。
 * たとえば、Array、String、Map、Setなどの組み込みオブジェクトは、
 * いずれもデフォルトでイテレータを備えているので、for...of命令では以下の要素を列挙できる。
 */