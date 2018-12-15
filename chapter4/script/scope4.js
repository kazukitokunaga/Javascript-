var scope = 'Global Variable';

function checkScope(){
  var scope = 'Local Variable';

  var f_lit = function(){ return scope };
  console.log(f_lit()); // 結果：Local Variable

  // Functionコンストラクターではグローバル変数を参照する
  var f_con = new Function('return scope;');
  console.log(f_con()); // 結果：Global Variable
}

checkScope();

// 上記のように、Functionコンストラクターの配下の変数は、
// その宣言場所にかかわらず常にグローバルスコープとみなされる