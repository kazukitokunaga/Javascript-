// 列挙可能なオブジェクトを自作する
class MyIterator{
  // 引数経由で渡された配列をdataプロパティに設定
  constructor(data){
    this.data = data;
  }

  // デフォルトイテレーターを取得するためのメソッドを定義
  [Symbol.iterator](){
    let current = 0;
    let that = this;
    return{
      // dataプロパティの次の要素を取得
      next(){
        /* nextメソッド配下のthisは自分自身（イテレーター）を指す。
         * よって、この例では、[Symbol.iterator]メソッド配下のthisをいったん変数thatに退避させておくことで、
         * MyIteratorオブジェクトのメンバーにアクセスできるようにしている。
         */
        return current < that.data.length ?
        {value: that.data[current++], done: false} :
        {done: true};
      }
    };
  }
}

// MyIteratorクラスで保持された配列を列挙
let itr = new MyIterator(['one', 'two', 'three']);
for(let value of itr){
  console.log(value); // 結果：one、two、three
}

/*
 * [Symbol.iterator]とブラケットでくくっているのは、Computed property namesの構文。
 * [Symbol.iterator]メソッドが返すイテレーター（Iteratorオブジェクト）の条件は、以下のとおり、nextメソッドを持つこと。
 * この例では、現在の位置（current）をチェックして、配列サイズ未満であれば、{ value: 要素の値, done: false}というオブジェクトを返す。
 *
 * current++としているのは、「インデックス番号を1つずつずらす（次の要素を取得しなさい）」という意味。
 * 変数currentが配列サイズに達していれば{done: true}で末尾に到達したことを通知する。
 */

// [Symbol.iterator]メソッドについて
let data_ary = ['one', 'two', 'three'];
let itr = data_ary[Symbol.iterator]();
let d;
while(d = itr.next()){
  if(d.done){ break; }
  console.log(d.done); // 結果：false、false、false
  console.log(d.value); // 結果：one、two、three
}