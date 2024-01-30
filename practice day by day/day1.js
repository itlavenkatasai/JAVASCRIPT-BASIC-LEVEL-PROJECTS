// let employee = {
//     name: "sai",
//     id: 21,
//     age: 21,
//     f_name: "narsaiah"
// };
// //  update the existing value and add a new value.
// employee.salary = 20000;
// employee.id = 19,
//     console.log(employee);
// // delete a value
// delete employee.f_name;
// console.log(employee);
// // when i delete all keys in the object i use let because let used to reassign the vairable.because when i delete the all valuse i reassign the vairable is null so i use let.
// // const used to not reassign the vairable.
// employee = {};
// console.log(employee);
// // when i read non existing property it return undefined.
// console.log(employee.find);
// // nested object
// const dob = '19-02-2222';
// let person = {
//     name: "sai",
//     age: 21,
//     dob,                 
//     address: {
//         pincode: 5053,
//         line1: "venkamoet",
//     }
// }
// console.log(person.address.line1);
// // optional changing
// function hello(){
//     console.log('heelo');
//     return 'sai';
// }
// hello();
// const fn = hello;
// fn();
// let person1 = {
//     name: "sai",
//     age: 21,
//     dob,                 
//     fn:hello(),
// }
// console.log(person1);
// str = 'hello';
// console.log(str.length);
// //split string
// const arr = "hii my name is sai";
// console.log(arr.split(" "));

let salary = 10000;
console.log(salary); // oupput  10000
let salary1 = salary.toString();
console.log(typeof salary1); /// string

const name = prompt();
alert(name);
console.log(name);