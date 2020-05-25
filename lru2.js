var LRUCache = function(capacity) {
  this.keys = []
  this.cache = Object.create(null)
  this.capacity = capacity
};

LRUCache.prototype.get = function(key) {
  if(this.cache[key]) {
      // 调整位置
      remove(this.keys, key)
      this.keys.push(key)
      return this.cache[key]
  }
  return -1
};

LRUCache.prototype.put = function(key, value) {
  if(this.cache[key]) {
      // 存在即更新
      this.cache[key] = value
      remove(this.keys, key)
      this.keys.push(key)
  } else {
      // 不存在即加入
      this.keys.push(key)
      this.cache[key] = value
      // 判断缓存是否已超过最大值
      if(this.keys.length > this.capacity) {
        console.log('this.cache, this.keys, this.keys[0]: ', this.cache, this.keys, this.keys[0]);
          removeCache(this.cache, this.keys, this.keys[0])
      }
  }
  console.log('this.keys', this.keys, this.cache)
};

// 移除 key
function remove(arr, key) {
  if (arr.length) {
      const index = arr.indexOf(key)
      console.log('index: ', index);
      if (index > -1) {
          return arr.splice(index, 1)
      }
      console.log('asda', arr)

  }
}

// 移除缓存中 key
function removeCache(cache, keys, key) {
  cache[key] = null
  remove(keys, key)
}

//这是控制两个变量 数组记录 更新的值 对象存储
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