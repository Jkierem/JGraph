export const abstractMethodError = (methodName) => {
  throw Error(`Abstract method ${methodName} not implemented.`)
}

//curryed funks
export const prop = (name) => (obj) => obj ? obj[name] : undefined;
export const path = (path) => (obj) => path.split('.').reduce(
  (acc, next) => {
    return prop(next)(acc)
  },
  obj
)

//unary funks
export const keysOf = (obj) => obj ? Object.keys(obj) : []
export const isDefined = (obj) => obj !== undefined && obj !== null
export const reverse = (arr) => arr.reduce((acc, obj) => [obj, ...acc], [])
export const not = funk => (...args) => !funk(...args)
export const head = ([head]) => head
export const tail = ([, ...tail]) => tail
export const isEmpty = arr => arr.length == 0

//binary funks
export const equals = (a, b) => a == b;
export const binaryUnion = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
export const asymEquals = (obj1, obj2) => keysOf(obj1).every(key => obj1[key] == obj2[key])
export const shallowEquals = (obj1, obj2) => union(keysOf(obj1), keysOf(obj2)).map(prop).every(keyOf => equals(keyOf(obj1), keyOf(obj2)));

//n-ary funks
export const zip = (...arrs) => arrs.some(isEmpty) ? [] : [[...arrs.map(head)], ...zip(...arrs.map(tail))]
export const union = (...arrs) => arrs.reduce(binaryUnion)
export const multiEquals = (...objs) => zip(objs, tail(objs)).map(x => shallowEquals(...x)).every(Boolean)
export const call = (funk, ...args) => (obj) => obj[funk](...args)

