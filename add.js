function add(fn, arg) {
  const args = Array.prototype.slice.call(arguments);
  if (args.length >= fn.length) {
    return fn(...args)
  }

  return function (...args2) {
      return add(fn, ...args, ...args2)

  }

}
console.log(add(2,3,4))
console.log(add(2)(3)(4))
