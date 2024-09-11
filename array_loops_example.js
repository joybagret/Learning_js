const num = [1,2,3,4,5,6]
//For each loop
num.forEach((element)=> {
    console.log(element*2)
})
 let string = "Ihana"
 //Arrayfrom loop
 let arr = Array.from(string)
 console.log(arr)
 //for of loop
 for(let i of num){
    console.log(i)
 }
 //for in loop
 for(let item in num){
    console.log(item)
}