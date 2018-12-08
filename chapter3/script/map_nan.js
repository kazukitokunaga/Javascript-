// NaN===NaNとみなされる
var m = new Map();
m.set(NaN, 'hoge');
console.log(m.get(NaN)); // 結果：hoge

/*
 * 通常、NaNは自分自身とも等しくない、つまり、NaN != NaNだが、
 * Mapの世界では、NaN === NaNとなる。
 */