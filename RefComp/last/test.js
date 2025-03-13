//referential equality 
// // 2 type of referential equality
// 1. comparison by value
// 2. comparison by reference



const a = "Nishan"
const b = "React"
const c = a
const d = b

console.log(a === c)
console.log(b === d)

console.log(a ==c)
console.log(b ==d)

// 2. comparison by reference complex data 
const aa = {name: "raktim"}
const bb = {name: "raktim"}
const cc = aa
const dd = bb
console.log(aa ==bb)
console.log(cc == aa)