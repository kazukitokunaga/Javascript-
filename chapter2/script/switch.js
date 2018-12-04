var rank = 'B';
switch(rank){
  case 'A':
    console.log('Aランクです。');
    break;
  case 'B':
    console.log('Bランクです。');
    break;
  case 'C':
    console.log('Cランクです。');
    break;
  default:
    console.log('ランク外です。');
    break;
} // 結果：Bランクです。

// なお、switch文のcase句は、「===」演算子で比較されるため、型が異なると評価されない。