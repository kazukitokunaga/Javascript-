/*
 * Object.defineProperties(obj, props)
 *    obj：プロパティを定義するオブジェクト
 *    props：プロパティの構成情報（「プロパティ名：構成情報」のハッシュ形式）
 */
Object.defineProperties(this,{
  base:{
    get: function () {
      return base;
    },
    set: function (base) {
      if(typeof base === 'number' && base > 0){
        _base = base;
      }
    }
  },
  height:{
    get: function () {
      return _height;
    },
    set: function (height) {
      _height = height;
    }
  }
});