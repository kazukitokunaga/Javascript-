var Member = function () {};

Member.prototype.sex = '男';
var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex); // 結果：男 | 男

mem2.sex = '女';
console.log(mem1.sex + '|' + mem2.sex); // 結果：男 | 女

/*
 * プロトタイプオブジェクトが利用されるのは、「値の参照時だけ」で、
 * 値の設定は、常にインスタンスに対して行われる。
 * そのため、上記では、mem2.sexに値が設定されたことから、prototypeオブジェクトを参照する必要が無くなり、
 * 結果としてmem2.sexの値だけが書き換わった。
 *
 * このため、本来、インスタンスごとに値が異なるはずのプロパティを、プロトタイプで宣言する意味はない。
 * よって、通常は以下のように使い分ける。
 * ・プロパティの宣言：コンストラクターで宣言
 * ・メソッドの宣言：プロトタイプで宣言
 */
