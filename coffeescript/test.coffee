# 2つの値を受け取って加算する関数をカリー化して記述
f = (x) -> (y) -> x + y

# fを部分適用してインクリメント関数を生成する例
increment = f 1

# 使用例
console.log increment 5 # 6

# F＃の関数合成を模したもの
# 合成したい関数群を配列にして、左から順番に実行するように
pipe = (fns) -> (x) -> fns.reduce(((v, f)-> f v) ,x)

# 2倍して１足す関数を合成で作る
compFunc = pipe([
    (x)->x*2    # 2倍して
    (x)->x+1    # 1足す
])

#使用例
console.log compFunc 5 # 11

# カリー化で関数定義
volume = (bottom)->(height)->(depth)->
  bottom * height * depth

bottom10 = volume 10
area20 = (volume 10) 2 # 連続スペースでは適用できないようだ。。。

console.log area20 5 # 100