let pet = {
  type: 'スノーホワイトハムスター',
  name: 'キラ',
  description: {
    birth: '2014-02-15'
  }
};

let pet2 = {
  name: '山田きら',
  color: '白',
  description: {
    food: 'ひまわりのタネ'
  }
};

let pet3 = {
  weight: 42,
  photo: 'http://www.wings.msn.to/img/ham.jpg'
};

/*
 * assignメソッドでは、同名のプロパティは、あとのもので上書きされる。
 * 再帰的なマージには非対応（この例では、descriptionプロパティは丸ごと上書きされる）
 */
Object.assign(pet, pet2, pet3);
console.log(pet);

// 結果：
// {
//   color: "白",
//   description: {
//     "ひまわりのタネ"
//   },
//   name: "山田きら",
//   photo: "http://www.wings.msn.to/img/ham.jpg",
//   type: "スノーホワイトハムスター",
//   weight: 42
}