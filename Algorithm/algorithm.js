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

//sadece yıl olarak çıktı almak için for döngüsü kullanma
for (let i = 0; i < birthDay.length; i++) {
    const age = today[2] - birthDay[i][2];
    console.log(`${birthDay[i]} yılında doğan kişi ${age} yaşında`);
}