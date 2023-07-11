// Truthy và Falsy
// Các giá trị là falsy: undefined, null, false, 0, -0, 0n, NaN, "".

// Tạo ra 2 biến number và n, n (nhập từ bàn phím)
// Nếu n > 5 => number = 10
// Nếu n <= 5 => number = -10
// let n = Number(prompt('Nhập n'));
// C1:
// let number;
// if (n > 5) {
    // number = 10;
// } else {
    // number = -10;
// }
// C2:
// let number = n ? 10 : -10;
// console.log(number);

// Nullish operator
// Tạo 2 biến number, n
// Nếu n là 1 giá trị truthy => number = n
// Nếu n là 1 giá trị falsy => number = 20
// let n;
// let number = n ? n : 20;
// let number1 = falsy || 20;
// let number2 = null / undefined ?? 20;
// console.log(number1);
// console.log(number2);