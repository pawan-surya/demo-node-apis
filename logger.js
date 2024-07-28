/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
         const key = JSON.stringify(args);
          if (cache.has(key)) {
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
        
    };
};


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result ;
    return function(...args){
       if(!called){
        called = true;
        return fn(...args)
       }else {
        return undefined
       }
    }
    
};



  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  onceFn(1,2,3); // 6
  onceFn(2,3,6); // returns undefined without calling fn
