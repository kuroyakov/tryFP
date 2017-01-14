// 2つの値を受け取って加算する関数をカリー化して記述
var f = (x)=>  (y) => x + y

// fを部分適用してインクリメント関数を生成する例
var increment = f(1);

// 使用例
console.log(increment(5));

// F#の関数合成演算子を模したもの
// 合成したい関数群を配列にして、左から順番に実行するように
var pipe = (fns) => (x) => fns.reduce((v, f) => f(v), x)

// 2倍して１足す関数を合成で作る
var compFunc = 
    pipe([
            (x) => x * 2,    // 2倍して
            (x) => x + 1     // 1足す
        ]);

// 使用例
console.log(compFunc(5));

