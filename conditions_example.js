let q = prompt("What is your age")
q = Number.ParseInt(q)
if (q<9){
    alert("Invalid age");
}
else if(q >=9 && q<18){
    
    alert("You can think of driving when you are 18");
}
else {
    alert("You can drive as you are above 18");
}
console.log("Done")