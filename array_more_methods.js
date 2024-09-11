let m = [1,2,3,4,5,6,7,8]
let n = [9,10,11,12]
delete m[0]
console.log(m.length)
let o = n.concat(n,m)
console.log(o)
let num = [1,2,3,21,12,31]
console.log(num.sort())
let compare = (a,b)=>{
    return a-b
}
let num1 =[21,1,32,22,12,33]
num1.sort(compare)
console.log(num1)