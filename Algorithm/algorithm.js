// Soru 1
// const birthDay = [[11,11,1985],[25,11,1999], [8,4,1992],[30,4,1978]]
// const today = [30,4,2024]

// Böyle iki arrayimiz var. buradaki 3 lü grup halinde olan arrayler doğum günlerini temsil ediyor. 
// istenenler,
// - birthDay arrayinin içine 5 doğum tarihi arrayi daha eklemelisiniz.
// - today araiyini baz alarak kaç yaşında olduklarını, aşağıdaki şekilde çıktısını alabilmeliyiz.
// // output
// 11 Kasım 1985 doğumlu kişi 38 yaşında.
// 25 Kasım 1999 doğumlu kişi 24 yaşında.
// 8 Nisan 1992 doğumlu kişi 32 yaşında.
// 30 Nisan 1978 doğumlu kişi 46 yaşında...

// Soru 2 
// "Hello, world!" yazısını "olleH, dlrow!" olarak tersine çeviren fonksiyonu yazınız.


//Cevap 1
const birthDay = [[11, 11, 1985], [25, 11, 1999], [8, 4, 1992], [30, 4, 1978]];
const today = [30, 4, 2024];

//push metoduyla array içerisine yeni arrayler ekleme
birthDay.push([9, 5, 1983], [4, 5, 1989], [5, 4, 1968], [8, 9, 1993], [9, 11, 2002]);
console.log(birthDay);

//for döngüsü ile yıl ve switch ile ay belirleme 
for (let i = 0; i < birthDay.length; i++) {
    let age = today[2] - birthDay[i][2];

    let month = birthDay[i][1]

    switch (month) {
        case 1:
            month = "Ocak";
            break;

        case 2:
            month = "Şubat";
            break;

        case 3:
            month = "Mart";
            break;

        case 4:
            month = "Nisan";
            break;

        case 5:
            month = "Mayıs";
            break;

        case 6:
            month = "Haziran";
            break;

        case 7:
            month = "Temmuz";
            break;

        case 8:
            month = "Ağustos";
            break;

        case 9:
            month = "Eylül";
            break;

        case 10:
            month = "Ekim";
            break;

        case 11:
            month = "Kasım";
            break;

        case 12:
            month = "Aralık";
            break;

        default:
            console.log("invalid month");
            break;
    }
    if (today[1] < birthDay[i][1] || (today[1] === birthDay[i][1] && today[0] < birthDay[i][0])) {
        age--;
    }
    console.log(`${birthDay[i][0]} ${month} ${birthDay[i][2]} doğumlu kişi ${age} yaşında.`);
}

//Cevap 2

const myVar = "Hello World!";

//for döngüsü kullanarak string'i yeni bir değişkene sondan başa doğru atama
function writeReverse(string) {
    let reverse = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }
    return reverse;
}

console.log(writeReverse(myVar));

//Soru 3
// const sentence = "barkın'ın onay derdini çözme yolları";
// yukarıdaki değişkenin ilk harflerini büyük yazdır.

const mySentence = "barkın'ın onay derdini çözme yolları";

// const splittedSentence = mySentence.split(" ");
// console.log(splittedSentence);

// function capitalizeFirstLetters(sentence) {
//     const splittedSentence = sentence.split(" ");
//     const mappedArray = splittedSentence.map((e) => e[0].toUpperCase() + e.slice(1));
//     const finalSentence = mappedArray.join(" ");
//     return finalSentence;
// }
// console.log(capitalizeFirstLetters(mySentence));

//stringin boşluklarından split metodu ile bölüp, 
//map metoduyla her elemanın ilk harfini toUpperCase metoduyla büyük harf yapma, 
//slice metoduyla birinci indexten itibaren elemanın kalanını ekleme ve
//join metoduyla araya boşluklar koyarak tekrar birleştirme işlemi için bir fonksiyon
function capitalizeFirstLetters(sentence) {
    return sentence.split(" ")
        .map((e) => e[0].toUpperCase() + e.slice(1))
        .join(" ");
};

console.log(capitalizeFirstLetters(mySentence));

//Soru 4
//