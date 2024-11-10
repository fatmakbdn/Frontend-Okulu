//? JS Giriş

//console.log("Merhaba Js");

//?Değişkenler

//*Number
//var a = 10; //Number 
//var b = 3.14; //Number

//*String
//var c = "Javascript"; //String

//console.log("a");
//console.log(typeof a);

//console.log(a, b, c);

//? Otomatik tip dönüşümleri

// var firstNumber = 10;
// var secondNumber = "20";
// var result = firstNumber - secondNumber;
// var result = firstNumber + secondNumber;
// console.log(result);
// console.log(typeof result);

//? Hoisting (Önemli!)

// var firstNumber
// console.log(firstNumber);
// firstNumber = 20;

// deneme();
// function deneme() {
//     console.log("deneme fonksiyonu");
// }

//? Boolean (true/false)

//var isActive = true;

// if (age) {
//     age >= 18 ? console.log("Ehliyet alabilir") : console.log("Ehiyet alamaz");
// }

//? Undefined- Tanımsız

// var userName;
// console.log(userName);
// console.log(typeof userName);

//? Null- Değer yok

// var isNull = null;
// console.log(isNull);
// console.log(typeof isNull);

//? Object - Nesne (Önemli!)

// var user = {
//   name: "Hakan",
//   age: 30,
//   isActive: true,
//   notlar: {
//     mat: 90,
//     fizik: 80,
//   },
//   favoriteFruits: ["elma", "armut"],
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name);
// console.log(user.notlar.mat);

//? Array - Dizi (Önemli!)

// var fruits = ["elma", "armut", "muz"];
// console.log(fruits);
// console.log(typeof fruits);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

//? Functions - Fonksiyonlar

// function hello() {
//   console.log("Merhaba Javascript");
// }
// hello();
// console.log(hello);
// console.log(typeof hello);

//? Date - Tarih

// var date = new Date();
// console.log(date);
// console.log(typeof date);

//* example
// var a = 10;
// var b = a;
// console.log("1-", a, b);
// a = 20;
// console.log("2-", a, b);

//** example
// var a = [10];
// var b = a;
// console.log("1- ", a, b);
// a = [20];
// console.log("2- ", a, b);
// console.log("3- ", a* b); 

//***
// var a = [10, 20, 30, 40, 50];
// var b = a;
// console.log("1-", a, b);
// a[0] = 60;
// a.push(60);
// console.log("2-", a, b);

//? Scope - Kapsam 

// var a = 10; // global scope
// function scope() {
//     var b = 20; // function scope
//     console.log(a,b);
// }
// scope();
// if (true) {
//     let c = 30; // block scope
// }
// {
//     let d = 40; // block scope
// }
// console.log(a, b, c, d);

//? Tip Dönüşümleri

// var a = 5;
// console.log(a, typeof a);
// a = String(a);
// console.log(a, typeof a);

// var a = "deneme";
// console.log(a, typeof a);
// a = Number(a);
// console.log(a, typeof a);

// var a = 5 + "2";
// console.log(a);

// var a = 5 - "2";
// console.log(a, typeof a);

//? Operators - Operatörler

//* Atama Operatörü (=)

// const a = 10;

//* Aritmetik operatörler

// console.log(10 + 5); // Toplama
// console.log(10 - 5); // Çıkarma
// console.log(10 * 5); // Çarpma
// console.log(10 / 5); // Bölme
// console.log(10 % 5); // Mod Alma
// console.log(10 ** 5); // Üs Alma

//* Math Fonksiyonları

// let sonuc;
// sonuc = Math.PI;
// sonuc = Math.round(3.6);
// sonuc = Math.ceil(3.2);
// sonuc = Math.floor(3.9);
// sonuc = Math.sqrt(16);
// sonuc = Math.floor(Math.random() * 100);
// console.log(sonuc);

//* String Methodları

// let value;
// const firstName = "Fatma";
// const lastName = "Kabdan";
// const department = "Yazılım Geliştirme";
// const age = 27;

// value = firstName + " " + lastName;
// value = firstName;
// value += " " + lastName;
// value = firstName.length;
// value = firstName.toUpperCase();
// value = lastName.toLowerCase();
// value = firstName[0];
// value = firstName[firstName.length - 1];
// value = firstName.indexOf("a");
// value = firstName.includes("a");
// value = firstName.concat(" ", lastName, " - ", "Yazılım Geliştirme");
// value = 
//     "İsim: " +
//     firstName +
//     " " +
//     "\nSoyisim: " +
//     lastName +
//     " " +
//     "\nYaş: " + 
//     age +
//     " " +
//     "\nDepartman: " +
//     department;

// console.log(value);

//? Template Literals

// value = `İsim: ${firstName}
// Soyisim: ${lastName}
// Yaş: ${age}
// Departman: ${department}`;

// value = `
// <ul>
//     <li>İsim: ${firstName}</li>
//     <li>İsim: ${lastName}</li>
//     <li>İsim: ${age}</li>
//     <li>İsim: ${department}</li>
// </ul>
//`;
// console.log(value);

//? Array Methodları

// const langs = ["Python", "Java", "C++", "Javascript"];
// const numbers = [43, 22, 35, 4, 12, 80, 50, 8, 99];

// value = numbers.length;
// value = numbers[0];
// value = numbers[numbers.length-1]; //Son eleman
// value = numbers.indexOf(12); // Elemanın indexi
// value = numbers.includes(12); // Elemanın varlığı
// value = numbers.push(100); // Dizinin sonuna eleman ekler
// value = numbers.unshift(200); // Dizinin başına eleman ekler
// value = numbers.pop(); // Dizinin sonundan eleman çıkarır
// value = numbers.shift(); // Dizinin başından eleman çıkarır
// value = numbers.reverse(); // Diziyi ters çevirir
// value = numbers.sort(); // Diziyi sıralar
// value = numbers.sort(function (a, b) {
//   return a - b;
// }); // Küçükten büyüğe sıralama

// console.log(value);


//? Object

// const student = {
//     fullName: "Fatma Kabdan",
//     age: 27,
//     adres: {
//         city: "Ankara",
//         country: "Türkiye",
//     },
//     langs: ["CSS3", "SCSS", "Javascript"],
//     work: function () {
//         console.log("Çalışıyor...");
//         return "Çalışıyor...";
//     },
// };

// value = student;
// value = student.fullName;
// value = student.age;
// value = student.adres.city;
// value = student.langs[2];
// value = student.work();

// let date = new Date();
// value = date;
// value = date.getMonth() + 1; // Ay
// value = date.getDate(); // Gün
// value = date.getDay(); // Haftanın günü
// value = date.getFullYear(); // Yıl
// value = date.getHours(); // Saat
// value = date.getMinutes(); // Dakika
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Tarih

// console.log(value);

//? Karşılaştırma Operatörleri

let value;
a = 10;
b = 20;
c = "10";
d = 10;

// value = a == c; // Eşit mi?
// value = a === c; // Tip ve değer eşit mi?
// value = a != b; // Eşit değil mi?
// value = a !== c; // Tip ve değer eşit değil mi?
// value = a > b; // Büyük mü?
// value = a < b; // Küçük mü?
// value = a >= b; // Büyük eşit mi?
// value = a <= b; // Küçük eşit mi?

// console.log(value);

//? && (And) Operatörü

// value = a == d && a < b;

// console.log(value);

//? || (Or) Operatörü

value = a == b || b < a;

console.log(value);

//? Koşullar - Conditions 

// let a = 10;
// let b = 20;

// if(a >b) {
//     value = `${a} büyüktür ${b}`;
// } else if (a == b) {

// }

//?Döngüler - Loops

//* For Döngüsü
// for (let i = 0; i < 10; i++) {
//     if (i == 3) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// const langs = ["Javascript", "CSS3", "SCSS", "Python"];

// for (let index = 0; index < langs.length; index++) {
//     console.log(langs[index]);
// }

// Functions - Fonksiyonlar

// function merhaba(){
//     console.log("Merhaba");
// }
// merhaba();