 //大神版本

 class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }
 
  get(key) {
    let val = this.map.get(key)
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }
 
  put(key, value) {
    if (this.map.has(key)) { 
      this.map.delete(key) 
    }
 
    this.map.set(key, value)
    let keys = this.map.keys()
    console.log('keys: ', keys, keys.next());
    while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
  }
}

let  cache = new LRUCache(2)
cache.put(1, 1)
cache.put(2, 2)
const val1 = cache.get(1)
// console.log('val1: ', val1);
cache.put(3, 3)  //[1, 3]
const val2 =  cache.get(2)
// console.log('val2: ', val2);
cache.put(4,4); //[3, 4]
const val3 =  cache.get(1)
// console.log('val3: ', val3);