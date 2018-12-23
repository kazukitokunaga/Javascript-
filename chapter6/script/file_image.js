window.addEventListener('DOMContentLoaded', function () {
  document.getElementById("file").addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.addEventListener('load', function (e) {
      document.getElementById("result").src = reader.result;
    }, true);
    // バイナリファイルを読み込む。DataURL形式とは、URLに直接、画像／音声等のデータを埋め込むための表現。
    // DataURL形式のデータは、<img>要素のsrc属性や、<a>要素のhref属性にそのまま埋め込めるので、データをいちいちファイルとして保存する必要がない。
    // もちろん、Ajax等の技術を利用して、取得したデータをデータベースに保存することもできる。
    reader.readAsDataURL(input);
  }, true);
});