var Member = function () {};

Member.prototype.sex = '男';

var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex); // 結果：男 | 男

mem2.sex = '女';
console.log(mem1.sex + '|' + mem2.sex); // 結果：男 | 女

delete mem1.sex
delete mem2.sex
console.log(mem1.sex + '|' + mem2.sex); // 結果：男 | 男

/*
 * インスタンス側での追加や削除といった操作が、プロトタイプオブジェクトにまで影響を及ぼすことはない。
 */