var getTriangle = new Function(
  // Functionコンストラクターには、関数が受け取る仮引数を順に並べ、最後に関数の本体を指定するのが基本。
  'base', 'height', 'return base * height / 2'
);
console.log('三角形の面積：' + getTriangle(5,2)); // 結果：5

// String/Number/Booleanなどのオブジェクトと同じく、new演算子を省略して、あたかもグローバル関数であるかのように記述することができる。
var getTriangle = Function('base', 'height', 'return base * height / 2');

// また、仮引数の部分を1つの引数として記述することもできる。
var getTriangle = Function('base , height', 'return base * height / 2');

/*
 * ここでは、本体に文が1つしかない関数を定義しているが、通常の関数定義と同様に、
 * セミコロンで区切って複数の文を含めることもできる。
 * しかし、実は特別な理由がない限り、あえてFunctionコンストラクターを利用するメリットは無い。
 * ただ、1点だけ重要な特徴がある。それは、
 * 「Functionコンストラクターでは、引数や関数本体を文字列として定義できる」という点。
 * つまり、以下のようなコードを記述できる。
 */
var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('菱形の面積：' + diamond(5,2)); // 結果：５