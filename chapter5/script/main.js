/*
 * 別ファイルで定義されたモジュールをインポートするのはimport命令の役割。
 */

import { Member, Area } from './lib/Util'

var m = new Member('太郎', '山田');
console.log(m.getName()); // 結果：山田太郎


