const R = require('ramda')
function memoize(fn) {
  const cache = {};
  return function() {
    const key = JSON.stringify(arguments);
    var value = cache[key];
    if(!value) {
      value = [fn.apply(null, arguments)];  // 放在一个数组中，方便应对 undefined，null 等异常情况
      cache[key] = value; 
    }
    return value[0];
  }
}

const fibonacci = memoize(n => n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2));
console.log(fibonacci(4))  // 执行后缓存了 fibonacci(2), fibonacci(3),  fibonacci(4)
console.log(fibonacci(10)) // fibonacci(2), fibonacci(3),  fibonacci(4) 的结果直接从缓存中取出，同时缓存其他的

/* 
var add = function(x) {
  return function(y) {
    return x + y;
  }; 
};
const increment = add(1);

console.log(increment(10)); // 11 */

const add = R.curry((x, y, z) =>  x + y + z);
const add7 = add(7);
console.log(add(7)(1)) // function

const compose = (f, g) => x => f(g(x))

const f = x => x + 1;
const g = x => x * 2;
const fg = compose(f, g);
fg(1) //3

compose(f, compose(g, t)) = compose(compose(f, g), t)  = f(g(t(x)))