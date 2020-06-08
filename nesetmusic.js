/* const finalPrice = number => {
  const price =(number * 2 * .8) -50
  return price
}

const result = finalPrice(100)
console.log(result) // => 110 */


/* const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)

const double = x => x * 2
const discount = x => x * 0.8
const coupon = x => x - 50

const finalPrice = compose(coupon, discount, double)

const result = finalPrice(100)
console.log(result) // => 110
 */


/* 
const Box = x => ({
  map: f => Box(f(x)),
  inspect: () => `Box(${x})`
})

const finalPrice = str =>
  Box(str)
      .map(x => x * 2)
      .map(x => x * 0.8)
      .map(x => x - 50)

const result = finalPrice(100)



console.log(result) // => Box(110)


const val = Box(2).map(x => x + 2).map(x => x * 3);
console.log('val: ', val);
// => Box(12)

const val = Box('hello').map(s => s.toUpperCase());
console.log('val: ', val);
// => Box('HELLO')
 */




const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
})

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

/* const resultLeft = Left(4).map(x => x + 1).map(x => x / 2)
console.log(resultLeft)  // => Left(4)

const resultRight = Right(4).map(x => x + 1).map(x => x / 2)
console.log(resultRight)  // => Right(2.5) */


/* const getUser = id =>
    [{ id: 1, name: 'Loren' }, { id: 2, name: 'Zora' }]
        .filter(x => x.id === id)[0]
  

try {
    const result = getUser(4).name
    console.log(result)
} catch (e) {
    console.log('error', e.message) // => 'TypeError: Cannot read property 'name' of undefined'
} */
    
/* const getUser = id => {
  const user = [{ id: 1, name: 'Loren' }, { id: 2, name: 'Zora' }]
      .filter(x => x.id === id)[0]
  return user ? Right(user) : Left(null)
}

const result = getUser(2)
  .map(x => x.name)
  .fold(() => 'not found', x => x) */


const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const getUser = id =>
    fromNullable([{ id: 1, name: 'Loren' }, { id: 2, name: 'Zora' }]
            .filter(x => x.id === id)[0])

const result = getUser(4)
    .map(x => x.name)
    .fold(() => 'not found', c => c.toUpperCase())

console.log(result) // => not found




// 或者采用这样


const tryCatch = (f) => {
  try {
      return Right(f())
  } catch (e) {
      return Left(e)
  }
}

const jsonFormat = str => JSON.parse(str)

const app = (str) =>
  tryCatch(() => jsonFormat(str))
      .map(x => x.path)
      .fold(() => 'default path', x => x)

const result = app('{"path":"some path..."}')
console.log(result) // => 'some path...'

const result2 = app('the way to death')
console.log(result2) // => 'default path'


const partial =
    (fn, ...presetArgs) =>
        (...laterArgs) =>
            fn(...presetArgs, ...laterArgs);

const double = n => n * 2
const map = (fn, F) => F.map(fn)
const mapDouble = partial(map, double)

const res = mapDouble(Box(1)).fold(x => x)
console.log(res)  // => 2
