var data = [4,9,16,25];
var result = data.some(function(value, index, array){
  return value % 3 === 0;
});

if (result){
  console.log('3の倍数が見つかりました。');
}else{
  console.log('3の倍数は見つかりませんでした。');
}

/*
 * 引数valueを3で除して、余りが0の場合は3の倍数であるとみなしている。
 * 剰余演算子「%」を利用したこのような判定はよく利用する。
 * someによく似たメソッドとして、everyメソッドがある。
 * someが「1つでも条件が合致しているか（callbackが一度でもtrueを返すか）」を判定するのに対して、
 * everyは「すべての要素が条件に合致するか（=関数callbackがすべてtrueを返すか）」を判定する。
 */