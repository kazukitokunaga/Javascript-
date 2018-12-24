var storage = new MyStorage('JSSample');
storage.setItem('hoge', 'ほげ');
console.log(storage.getItem('hoge')); // 結果：ほげ
storage.save();
