/*
 * オブジェクトから特定のプロパティだけを取り出す
 */
function show({name}){
  console.log(name); // 結果：山田太郎
};

let member = {
  mid: 'Y0001',
  name: '山田太郎',
  address: 't_yamada@example.com'
};
