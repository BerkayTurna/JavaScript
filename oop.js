"use strict";

// function PatientOwner(fullName, petName, phone, city) {
//   this.fullName = fullName;
//     this.petName = petName;
//     this.phone = phone;
//     this.city = city;

//     Object.seal(this)
// };

// const owner1 = new PatientOwner("Cenk Kaynak", "Olaf", "01234567890", "İzmir");
// const owner2 = new PatientOwner("Orkun Durmaz", "Jaina", "01324658765", "İzmir");
// const owner3 = new PatientOwner("Barkın Sayın", "Susam", "1395635103570", "İstanbul");

// console.log(owner1, owner2, owner3);

// function NerdStudent(fullName, instructor, course, gitPushCount){
//     this.fullName = fullName;
//     this.instructor = instructor;
//     this.course = course;
//     this.gitPushCount = gitPushCount
// }

// const nerd1 = new NerdStudent("Çağatay Çevik", "Buse Şeker", "Node.JS", 1658);
// const nerd2 = new NerdStudent("Martin Kırant", "Hicran Ertuğral", "React Native", 2172);

// // owner1.province = "Foça";   hata verdirdim :)

// const owners = [];

// function addOwner(own) {
//     if(own instanceof PatientOwner) {
//         owners.push(own);
//     } else {
//         throw "Can't add this data"
//     }
// };

// addOwner(owner2);
// // addOwner("ali");

// console.log(owners);
// //Constructor.prototype.property = any
// PatientOwner.prototype.description = "Bu bir hasta sahibi objesidir.";

// console.table(owner1);
// console.log(owner1.description);

// class PatientOwner {
//     #firstName;
//     #lastName;
//     #petLastName;
//   constructor(firstName, lastName, petName, petLastName, phone, city) {
//     this.#firstName = firstName;
//     this.#lastName = lastName;
//     this.petName = petName;
//     this.#petLastName = petLastName;
//     this.phone = phone;
//     this.city = city;
//   }
//   sayHello(){
//     console.log("Hello");
//   }
// }

// const owner1 = new PatientOwner("Cenk", "Kaynak", "Olaf", "Kaynak", "01234567890", "İzmir");
// const owner2 = new PatientOwner("Orkun Durmaz", "Jaina", "01324658765", "İzmir");
// const owner3 = new PatientOwner("Barkın Sayın", "Susam", "1395635103570", "İstanbul");

// get fullName() {
//     return `${this.#firstName} ${this.#lastName}`;
// }

// console.log(owner1);


//Change the Prototype to a New Object

function Dog(name){
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function(){
        console.log("Ham hum ham hum");
    },
    describe(){
        console.log("Benim adım " + this.name);
    }
};

const kopek = new Dog("Paşa");

console.log(kopek);
console.log(kopek.eat());
console.log(kopek.describe());