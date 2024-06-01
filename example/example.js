const users = [
    {
        id: 1,
        firstName: "john ",
        lastName: "DoE  ",
        email: "johndoe@example.com",
        age: 28,
        registered: "2020-03-15",
        city: "New York",
        score: 82.5,
        birthDay: {
            day: 11,
            year: 1990,
            month: "Nisan",
        },
        skills: ["JavaScript", "React", "Node.js"],
        education: {
            degree: "Lisans",
            field: "Bilgisayar Bilimi",
            university: "NYU",
            graduationYear: 2012,
        },
        experience: [
            {
                company: "Teknoloji A.Ş.",
                role: "Frontend Developer",
                years: 3,
            },
            {
                company: "Web Çözümleri",
                role: "Junior Developer",
                years: 2,
            },
        ],
        hobbies: ["Okuma", "Seyahat", "Yüzme"],
    },
    {
        id: 2,
        firstName: "jaNE ",
        lastName: "sMiTH",
        email: "janesmith@example.com",
        age: 22,
        registered: "2021-06-20",
        city: "Los Angeles",
        score: 90.0,
        birthDay: {
            day: 25,
            year: 1998,
            month: "Temmuz",
        },
        skills: ["Python", "Django", "Makine Öğrenimi"],
        education: {
            degree: "Yüksek Lisans",
            field: "Yapay Zeka",
            university: "UCLA",
            graduationYear: 2020,
        },
        experience: [
            {
                company: "AI Yenilikçiler",
                role: "Data Scientist",
                years: 2,
            },
        ],
        hobbies: ["Bisiklet", "Resim"],
    },
    {
        id: 3,
        firstName: " aLice ",
        lastName: "johNson ",
        email: "alicejohnson@example.com",
        age: 35,
        registered: "2018-07-10",
        city: "Chicago",
        score: 77.0,
        birthDay: {
            day: 5,
            year: 1985,
            month: "Mart",
        },
        skills: ["Java", "Spring", "Hibernate"],
        education: {
            degree: "Lisans",
            field: "Yazılım Mühendisliği",
            university: "University of Chicago",
            graduationYear: 2007,
        },
        experience: [
            {
                company: "Kurumsal Çözümler",
                role: "Backend Developer",
                years: 7,
            },
            {
                company: "Yenilikçi Uygulamalar",
                role: "Senior Developer",
                years: 5,
            },
        ],
        hobbies: ["Bahçecilik", "Yemek Yapma"],
    },
    {
        id: 4,
        firstName: "bOb ",
        lastName: "broWn ",
        email: "bobbrown@example.com",
        age: 30,
        registered: "2019-11-05",
        city: "Houston",
        score: 85.0,
        birthDay: {
            day: 17,
            year: 1992,
            month: "Aralık",
        },
        skills: ["C#", ".NET", "Azure"],
        education: {
            degree: "Lisans",
            field: "Bilgi Teknolojisi",
            university: "Texas A&M",
            graduationYear: 2014,
        },
        experience: [
            {
                company: "Bulut Hizmetleri",
                role: "Bulut Mühendisi",
                years: 4,
            },
            {
                company: "BT Çözümleri",
                role: "Sistem Yöneticisi",
                years: 3,
            },
        ],
        hobbies: ["Yürüyüş", "Fotoğrafçılık"],
    },
    {
        id: 5,
        firstName: " mAry annE ",
        lastName: "jAckSon ",
        email: "maryjackson@example.com",
        age: 27,
        registered: "2021-05-15",
        city: "San Francisco",
        score: 88.0,
        birthDay: {
            day: 8,
            year: 1994,
            month: "Mayıs",
        },
        skills: ["HTML", "CSS", "JavaScript"],
        education: {
            degree: "Lisans",
            field: "Web Tasarımı",
            university: "Stanford",
            graduationYear: 2016,
        },
        experience: [
            {
                company: "Web Studio",
                role: "Frontend Developer",
                years: 3,
            },
            {
                company: "Creative Solutions",
                role: "UI Designer",
                years: 2,
            },
        ],
        hobbies: ["Yazma", "Çizim"],
    },
    {
        id: 6,
        firstName: "pETer pArKer ",
        lastName: "smith",
        email: "peterparker@example.com",
        age: 29,
        registered: "2022-02-25",
        city: "New York",
        score: 92.0,
        birthDay: {
            day: 15,
            year: 1993,
            month: "Ocak",
        },
        skills: ["JavaScript", "Vue.js", "Node.js"],
        education: {
            degree: "Lisans",
            field: "Bilgisayar Mühendisliği",
            university: "Columbia University",
            graduationYear: 2015,
        },
        experience: [
            {
                company: "Tech Innovators",
                role: "Full Stack Developer",
                years: 4,
            },
            {
                company: "NextGen Solutions",
                role: "Backend Developer",
                years: 3,
            },
        ],
        hobbies: ["Tırmanma", "Kayak"],
    },
];


// const nameCorrection = (array) => {
//     const names = [];

//     for (let index = 0; index < array.length; index++) {
//         const firstLetter = array[index].firstName.trim().slice(0, 1).toUpperCase();
//         const rest = array[index].firstName.trim().slice(1).toLowerCase();
//         const lastNames = array[index].lastName.trim().toUpperCase();
//         names.push(firstLetter.concat(rest) + " " + lastNames);
//     }

//     return console.log(names);

// };

// nameCorrection(users);

const formattedNames = users.map((user) => {
    const firstName = user.firstName.trim().split(" ").map((name) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    }).join(" ");
    const lastName = user.lastName.trim().toUpperCase();
    return firstName + " " + lastName;
})

// console.log(formattedNames);




const monthNumbers = (month) => {
    const months = [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
    ];

    return months.indexOf(month) + 1;
}
const formattedBirthDays = users.map((user) => {

    return user.birthDay.day + "-" + monthNumbers(user.birthDay.month) + "-" + user.birthDay.year
})


const bDaysWithSwitch = users.map((user) => {
    let month = user.birthDay.month;
    switch (month) {
        case "Ocak":
            month = "01"
            break;
        case "Şubat":
            month = "02"
            break;
        case "Mart":
            month = "03"
            break;
        case "Nisan":
            month = "04"
            break;
        case "Mayıs":
            month = "05"
            break;
        case "Haziran":
            month = "06"
            break;
        case "Temmuz":
            month = "07"
            break;
        case "Ağustos":
            month = "08"
            break;
        case "Eylül":
            month = "09"
            break;
        case "Ekim":
            month = "10"
            break;
        case "Kasım":
            month = "11"
            break;
        case "Aralık":
            month = "12"
            break;
        default:
            month = "00"
            break;
    };
    const day = String(user.birthDay.day).padStart(2, "0");
    const year = String(user.birthDay.year);
    return day + "-" + month + "-" + year

})
console.log(formattedBirthDays);
console.log(bDaysWithSwitch);

//Array içerisinde "John Doe xx-xx-xxxx tarihinde doğmuştur." yazdıralım.

// const sentence = (array1, array2) => {
//     for (let i = 0; i < array1.length; i++) {
//         const element = `${array1[i]}`;
//         return element
//     }
//     for (let j = 0; j < array2.length; j++) {
//         const element1 = `${array2[j]}`;
//         return element1

//     }
// }

// console.log(sentence(formattedNames, formattedBirthDays))

//Yöntem 1
const userBirthDates = [];
for (let i = 0; i < formattedNames.length; i++) {
    const name = formattedNames[i];
    const bDate = bDaysWithSwitch[i];
    userBirthDates.push(`${name} isimli kullanıcı ${bDate} gününde doğmuştur.`);
}
console.log(userBirthDates);

//Yöntem 2
const userBirthDates2 = formattedNames.map((name, i) => {
    return `${name} isimli kullanıcı ${formattedBirthDays[i]} gününde doğmuştur.`;
});

console.log(userBirthDates2);

//Her iki kod da users dizininde eksik bilgi olmaması ile çalışıyor. Eksik
//bilgi olması durumunda nasıl çalışır halde tutabiliriz?