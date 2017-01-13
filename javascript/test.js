// 2つの値を受け取って加算する関数をカリー化して記述
var f = (x)=> {return (y)=>x+y;}

// fを部分適用してインクリメント関数を生成する例
var increment = f(1);

// 使用例
console.log(increment(5));