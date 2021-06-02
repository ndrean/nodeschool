// module.exports = 
function arrayMap(arr, fn) {
    arr.reduce(fn(acc,curr))
  }

// const nbs = [1,2,3]
// console.log(arrayMap(nbs))
module.exports = arrayMap