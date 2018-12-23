// iterator_my.jsで作成したMyIteratorクラスを、ジェネレーターで書き直す。
class MyIterator{
  // 引数経由で渡された配列をdataプロパティに設定
  constructor(data){
    this.data = data;
    this[Symbol.iterator] = function* () {
      let current = 0;
      let that = this;
      while(current < that.data.length){
        yield that.data[current++];
      }
    };
  }
}

//イテレーターの場合

// class MyIterator{
//   // 引数経由で渡された配列をdataプロパティに設定
//   constructor(data){
//     this.data = data;
//   }

//   // デフォルトイテレーターを取得するためのメソッドを定義
//   [Symbol.iterator](){
//     let current = 0;
//     let that = this;
//     return{
//       // dataプロパティの次の要素を取得
//       next(){
//         /* nextメソッド配下のthisは自分自身（イテレーター）を指す。
//          * よって、この例では、[Symbol.iterator]メソッド配下のthisをいったん変数thatに退避させておくことで、
//          * MyIteratorオブジェクトのメンバーにアクセスできるようにしている。
//          */
//         return current < that.data.length ?
//         {value: that.data[current++], done: false} :
//         {done: true};
//       }
//     };
//   }
// }