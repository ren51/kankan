//関数を扱って保存するパターン
localStorage.setItem('Kye',obj);
//そのオブジェクトを保存する
localStorage.saveKey = 'obj';
//保存した値を取り出す
var value = localStorage.getItem('Key');
//そのプロパティを取得する
var value = localStorage.saveKey;

//複数のデータを保存する
var obj = {
    q :クエスチョン,
    a :アンサー
}
var obj = JSON.stringify(obj);
localStorage.setItem('Key',obj);

var jsonObj = localStorage.getItem('Key');
var jsObj = JSON.parse(jsonObj);
console.log(jsobj);


