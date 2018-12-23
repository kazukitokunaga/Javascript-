// Utilモジュール配下の要素個々に別名を付与
import { Member as MyMember, Area as MyArea } from './lib/Util'

var m = new MyMember('太郎', '山田');
console.log(m.getName); // 結果：山田太郎
console.log(MyArea.getTriangle(10, 5)); // 結果：25



