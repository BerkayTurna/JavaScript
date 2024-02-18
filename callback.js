// const hesap  = (num1, num2, callback) => {
//     return callback(num1, num2);
// }

// function multiply(num1,num2) {
//     return num1 * num2;
// }

// function sum(num1,num2) {
//     return num1 + num2;
// }

// console.log(hesap(3,5,sum));

const students = ["Berkay", "Cenk", "Mert", "Orkun", "Hicran", "Buse", "Onder"];

const ourOwnForEach = (arr, callbackFn) => {
    for (let index = 0; index < arr.length; index++) {
        callbackFn(arr[index], index);
    }
}

// const logElementWithIndex = (element, index) => {
//     console.log(`index ${index}: ${element}`);
// }

ourOwnForEach(
    students,
    (student, index) => console.log(`index ${index}: ${student}`)
)
// ourOwnForEach(
//     students,
//     logElementWithIndex
// )

// ourOwnForEach(students, student => console.warn(student));