// 6.实现一个 setter 方法
let setter = function(content, key, value){
  //...实现
}

let n = {
  a:{
    b:{
      c:{d:1},
      bx:{y:1}
    },
    ax:{y:1}
  }
} //修改值 setter (n, 'a.b.c.d', 3)

console.log(n.a.b.c.d) // 打印3
setter(n,'a.b.bx', 1)

console.log(n.b.bx) //打印1