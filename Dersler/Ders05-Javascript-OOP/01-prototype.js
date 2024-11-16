//? Object Literal
// const person1 = {
//     name: "Fatma",
//     age: 27,
//     langs: ["CSS3", "Javascript", "Python"],
//     address: {
//         city: "Ankara",
//         street: "Çankaya",
//     },
//     showInfos: function () {
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// };

// const person2 = {
//     name: "Narin",
//     age: 26,
//     langs: ["CSS3", "Javascript", "Python"],
//     address: {
//         city: "Muş",
//         street: "Merkez",
//     },
//     showInfos: function () {
//         console.log(this.name, this.age, this.langs, this.address);
//     },
// };

// console.log(person1);
// console.log(person2);

//? Yapıcı Fonksiyon (Constructor)
function Person(name, age, langs) {
    this.name = name;
    this.age = age;
    this.langs = langs;

    // this.showInfos = function () {
    //     console.log(this.name, this.age, this.langs);
    // };
}

Person.prototype.showInfos = function () {
    console.log(this.name, this.age, this.langs);
};

function Employee(name, age, langs, salary) {
    Person.call(this, name, age, langs);
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);

const emp1 = new Employee("Fatma", 27, ["CSS3", "Javascript", "Python"], 40000);
console.log(emp1);
emp1.showInfos();

const person1 = new Person("Fatma", 27, ["CSS3", "Javascript", "Python"]);
const person2 = new Person("Narin", 26, ["CSS3", "Javascript", "Python"]);

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();
// console.log(person1.langs[1]);