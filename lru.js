/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.length = capacity;
  this.arr = new Array();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const arr = this.arr;
  let val = null
  arr.forEach(item => {
    if (key == item[key]) {
      item['count']++
      val = item[key]
    }
  })
  if (val) {
    return val
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const arr = this.arr;

  if (this.length > arr.length) { //还没有到达栈的最大值

  } else {
    arr.sort(function (a, b) {
      if (a.count > b.count ) return 1
      return -1
    })
    console.log('arr: ', arr, this.length, arr.length);

    arr.shift(arr.length -1 )

  }
  const obj = {}
  obj[key] = value;
  obj['count'] = 0
  arr.push(
    obj
  )
  // console.log('arr   ', arr)
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


let  cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
const val1 = cache.get(1)
console.log('val1: ', val1);
cache.put(3, 3)  //[1, 3]
const val2 =  cache.get(2)
console.log('val2: ', val2);
cache.put(4,4); //[3, 4]
const val3 =  cache.get(1)
/* const val4 =  cache.get(3)
const val5 =  cache.get(4) */
console.log('val3: ', val3);
/* console.log('val4: ', val4);
console.log('val5: ', val5); */

/**
 * 
 * 
 * ![hash](https://tva1.sinaimg.cn/large/007S8ZIlgy1gf52s270dej30li0ieaaw.jpg)

![test](https://tva1.sinaimg.cn/large/007S8ZIlgy1gf52tke2kwj30zm0jimyc.jpg)
 * 
 */
// 本来直接使用对象编写的，利用可以获得对象的全部键值对，将值的活跃度按 最前面的是要被删除的，最后面的是最活跃的 排序，键值对按照对象的key排序，然而最后发现，新加入的key－value不是直接放到最后，而是按码值排序，因此会一直按‘0’'1''2'排序



