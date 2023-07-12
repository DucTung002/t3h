// function sum(a, b) {
    // return a + b;
// }
// const sum = (a, b) => {
    // return a + b;
// };

// const sum = (a, b) => {
    // console.log('sum:', a + b);
    // return a + b;
// };
// console.log(sum(3, 5));\
// ECMAScript2015 <=> ES6
// ..
// ECMAScript2023

// Syntax tổng quát
// comst/let/var namefn = (params) => {
    // code
// }
// console.log(sum(3, 5));

// viết 1 hàm tính tổng các số được truyền vào (viết hàm bằng syntax arrow function)
// 1, 2, 5, 8, 3
// 1, -4
// 10, 20, 70, 90
// 1, 2, 3, 4, 5, 6, 7, 8, 9

// Rest operator
// const sum = (...listNumber) => {
    // console.log(listNumber);
    // let sumNumbers = 0;
    // for (let number of listNumber) {
    // sumNumbers = sumNumbers + number;
    // }
    // console.log(sumNumbers);
// }
// sum(1, 2, 5, 8, 3);
// sum(1, -4);
// sum(10, 20, 70, 90);
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9);

// const logger = (param1, param2, param3, ...params) => {
    // console.log('param1: ', param1);
    // console.log('param2: ', param2);
    // console.log('param3: ', param3);
    // console.log('params: ', params);
// };
// logger (1, 2, 3, 4, 5);

// Spread operator
// const listNumber0 = [7, 8, 9];
// const listNumber1 = [1, 2, 3];
// const listNumber2 = [...listNumber1, 4, 5, 6, ...listNumber0];
// listNumber1[0] = 10;
// // console.log('listNumber1: ', listNumber1);
// console.log(listNumber2);
// console.log(...listNumber2);
// const student1 = {
//     age: 15,
// };
// const student2 = {...student1, name: 'Trần Thị B', age: 16};
// student1.name = 'Nguyễn Văn A';
// console.log(student1);
// console.log(student2);