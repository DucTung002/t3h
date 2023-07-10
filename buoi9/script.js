// const computer = {
//     key1: value1,
//     key2: value2,
//     ...,
//     keyN = valueN
// }
// const computer = {
    // name: 'Lenovo Thinkpad',
    // price: 10,
    // vendor: 'Lenovo',
    // color: 'Purple',
    // 1: 'một',
    // '0': không
// };
// Cách 1: Dùng khi biết rõ key
// console.log(computer.price);
// Cách 2: Dùng khi key đang là giá trị của 1 biến khác
// const price = 'abc'
// console.log(computer[price])

// Update
// const student = {
    // name: 'Nguyễn Văn A',
    // gender: 'Male'
// }
// console.log(student);
// student['name'] = 'Trần Thị B';
// student.name = 'Trần Thị B';
// student.age = 15;
// console.log(student);

// Delete
// delete student.gender;
// delete student['gender'];

// const listStudent = [
//     {
//         name: 'Nguyễn Văn A',
//         gender: 'Male'
//     },
//     {
//         name: 'Trần Thị B',
//         gender: 'Female',
//         skills: ['C++', 'Python']
//     }
// ];
// console.log(listStudent[1].skills[0]);

// const listStudent = {
    // name: 'Trần Thị B',
    // gender: 'Female',
    // skills: ['C++', 'Python']  
// }
// C1:
// console.log(listStudent.name);
// console.log(listStudent.gender);
// console.log(listStudent.skills);
// C2: Vòng lặp for in
// for (let key in listStudent) {
    // console.log(student[key]);
// }

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// for (let elemnt of arr1) {
    // arr2.push(element);
// }
// arr1[2] = 33;
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// Tính tổng các số từ A đến N
// function nameFn(parameter1, ..., parameterN) {
    // Code block
// }
// function calSum (A, N) {
    // console.log('A: ', A);
    // console.log('N: ', N);
    // let sum = 0;
    // for (let i =  A; i <= N; i++) {
        // sum += i;
    // }
    // console.log(sum);
// }

// A = 1, N = 10
// calSum(1, 10)
// A = -20, N = 100
// calSum(-20, 100)
// A = 1, N = 500
// calSum(1, 500)
// A = 6, N = 90
// calSum(6, 90)

// function logger(name) {
    // console.log('Xin chào bạn: ', name);
// }
// logger('Văn A')

// 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// function logger (name) {
    // console.log('Hello world,', name);
// }
// logger('Tùng')

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// function sum (a, b) {
    // return (a + b) ** 2;
// }
// console.log(sum(3, 4));

// 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// function number () {
    // const a = Number(prompt('Hãy nhập số bất kỳ: '));
    // if (a >= 0) {
        // console.log('a: ', a);
    // }
// }
// number()

// Call back
// function A () {
//     console.log('Function A');
// }

// function B (callback) {
    // callback();
    // console.log('Function B');
// }
// B(A)

// Thực hiện 1 nhiệm vụ sau N milisecond
// setTimeout(callback, n);
// function logger () {
    // console.log('Test timeout');
// }
// setTimeout(logger, 5000);
// setInterval (logger, 1000);
// clearInterval();
// setTimeout (function() {
    // console.log('In ra sau 3 giây');
// }, 3000);