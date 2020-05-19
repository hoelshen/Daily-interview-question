//5.请给出实现  实现一个 bind 方法
let n = function (a,b,c,d){
  console.log(this.x, a,b,c,d)
}

let m = {x:3}

let fn = n.bind(m, 1,3)

fn(5,8)// 打印3,1,3,5,8



