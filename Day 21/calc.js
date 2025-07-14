// ✅ 1. Destructuring Import (Object Destructuring)
const {add,sub,div,mul} = require('./math')
console.log(add(4,2))
console.log(sub(4,2))
console.log(div(4,2))
console.log(mul(4,2))


//  2. Namespace Import (Module Object Import)
const math = require('./math')
console.log(math.add(4,2))
console.log(math.sub(4,2))
console.log(math.div(4,2))
console.log(math.mul(4,2))