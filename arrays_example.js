let marks = [80, 98, 80, 76, false, 'Not present'] //Defined marks as let because the value for the array will change in the code
console.log(marks[0])
console.log(marks[1])
console.log(marks[4])
console.log(marks[5])
console.log('The lenghth of marks is', marks.length)
marks[0] = 86
console.log(marks[0])
console.log(typeof marks)
for(let i=0; i<marks.length; i++)
    console.log('The marks is', marks[i])