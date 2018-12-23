let name = '山田太郎';
let birth = new Date(1970, 5, 25);
// 以下は、ES2015より前は「{ name = name, birth = birth }」と表す必要があった。
let member = {name, birth};

console.log(member); // 結果：{name:'山田太郎', birth: Thu Jun 25 1970 00:00:00 GMT+0900(東京(標準時))}
