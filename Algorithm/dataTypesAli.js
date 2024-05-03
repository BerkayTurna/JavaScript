let myVar = 34;

let myVar2 = myVar;

myVar2 = 35;

console.log(myVar);
console.log(myVar2);

let myVar3 = {
    studentName: "Barkın",
    course: "Bootstrap"
}

let myVar4 = myVar3;

myVar4 = { ...myVar3 }
myVar4.studentName = "Berkay"

console.log(myVar3);
console.log(myVar4);