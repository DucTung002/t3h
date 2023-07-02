// const w = Number(prompt('Hãy nhập chiều cân nặng của bạn:'));
// const h = Number(prompt('Hãy nhập chiều cao của bạn:'));
// const BMI = w/(h*h);
// console.log('BMI: ', BMI);
// if(BMI < 18.5) {
//     alert ('Nhẹ cân');
// } else if (BMI >= 18.5 && BMI < 23) {
//     alert ('Bình thường');
// } else if (BMI >= 23 && BMI < 25) {
//     alert ('Thừa cân');
// } else {
//     alert ('Béo phì');
// }

// for(let i = 100; i >= 1; i--) {
//     console.log(i);
// }

//Vòng lặp for
//C1:
// for(let i = 1; i <= 100; i++)
// if (i %2 == 0) {
//     document.writeln(i);
// }
//C2:
// for (let i = 2; i <= 100; i = i + 2) {
//     document.writeln(i);
// }

//Vòng lặp while
// let theNumber = 10;
// while (theNumber >= 5) {
//     theNumber = Math.floor(Math.random() * 10);
//     document.writeln(theNumber);
// }

//Hãy dùng while để in ra dãy số từ 1 đến 200
// let theNumber = 1;
// while (theNumber <= 200) {
//     theNumber = Math.floor;
//     document.writeln(theNumber);
// }

// let x = 101;
// let y = -10;
// while ((x <=0 || x >= 100) || (x <=0 || x >= 100) || x > y){
//     x = Number(prompt('Nhập x'));
//     y = Number(prompt('Nhập y'));
// }
// while (x >= y) {
//     console.log('x: ', x);
//     console.log('y: ', y);
//     x++;
//     y--;
// }

//Vòng lặp do while
// let x = 10;
// let y = 5;
// do {
//     console.log('Ok');
// } while (x < y);

//1. In ra dãy số từ 1 đến 500
// for (i = 1; i <= 500; i++) {
//     console.log(i)
// }

//2. In ra các số chia hết cho 2 và 3 từ 1 đến 300
// for (i = 1; i <= 300; i++) {
//     if ((i % 2 == 0) && (i % 3 == 0)) {
//         console.log(i);
//     }
// }

//3. Tính tổng các số chẵn trong đoạn [-30, 50]
// let sum = 0;
// for (i = -30; i <= 50; i++) {
//     if (i % 2 == 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);

//4. Nhập vào số n. Tính giai thừa của số n
// let n = 0;
// let gt = 1;
// for (let i = 1; i <= 6; i++) {
//     gt = gt * i;
// }
// console.log(gt);

//5. Nhập vào 3 số a, b, x (a < b). Tìm trong khoảng a, b số nhỏ nhất mà chia hết cho x
// let a = Number(prompt('Hãy nhập số a: '));
// let b = Number(prompt('Hãy nhập số b: '));
// let x = Number(prompt('Hãy nhập số x: '));
// let smallestNumber = null;
// for (let i = a; i <= b; i++) {
//   if (i % x === 0) {
//     smallestNumber = i;
//     break;
//   }
// }
// console.log("Số nhỏ nhất chia hết cho",  x, "trong khoảng từ", a, "đến", b, "là", smallestNumber);

//6. Nhập vào số n (n >= 2). Hãy tính giá trị biểu thức sau: S=1/1*2 + 1/2*3 + ... + 1/n*(n+1)
// let n = Number(prompt('Hãy nhập số n: '));
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += 1 / (i * (i + 1));
// }
// console.log("Giá trị của biểu thức là:", sum);

//7. Nhập vào số n. Hãy in ra số ước của n
// let n = Number(prompt('Hãy nhập số n: '));
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     count++;
//   }
// }
// console.log("Số ước của", n, "là:", count);

//8. Nhập vào số n. Viết chương trình kiểm tra xem n có phải số nguyên tố không
// let n = Number(prompt('Hãy nhập số n: '));
// let songuyento = true;
// for (let i = 2; i <= Math.sqrt(n); i++) {
//   if (n % i === 0) {
//     songuyento = false;
//     break;
//   }
// }
// if (songuyento && n > 1) {
//   console.log(n, "là số nguyên tố");
// } else {
//   console.log(n, "không là số nguyên tố");
// }

//9. Nhập vào chuỗi s (chỉ gồm chữ số) và số l. Hãy thêm vào đầu chuỗi s ký tự ‘0’ cho đến khi độ dài chuỗi s >= l
// let s = String(prompt('Hãy nhập chuỗi s: '));
// let l = Number(prompt('Hãy nhập số l: '));
// while (s.length < l) {
//   s = "0" + s;
// }
// console.log("Chuỗi sau khi thêm '0' là:", s);

//10. Nhập vào 2 số m, n (m > 0, n > 0). Tìm ước chung lớn nhất của m, n
// let m = Number(prompt('Hãy nhập số m: '));
// let n = Number(prompt('Hãy nhập số n: '));
// while (n !== 0) {
//     let temp = m;
//     m = n;
//     n = temp % n;
//   }
// console.log("Ước chung lớn nhất của", m, "và", n, "là:", m);

//11. Nhập vào 2 số m, n (m > 0, n > 0). Tìm bội chung nhỏ nhất của m, n
// let m = Number(prompt('Hãy nhập số m: '));
// let n = Number(prompt('Hãy nhập số n: '));
// let a = m;
// let b = n;
// while (b !== 0) {
//   let temp = a;
//   a = b;
//   b = temp % b;
// }
// let lcm = (m * n) / a;
// console.log("Bội chung nhỏ nhất của", m, "và", n, "là:", lcm);

// 12. Trò chơi đoán số:
// Máy tính tự động tạo ra 1 số correct bất kỳ từ 1 đến 20.
// Người dùng nhập vào 1 số answer. Nếu answer bằng correct → in ra “Đoán đúng”.
// Ngược lại → in ra “Đoán sai” và yêu cầu nhập lại answer.
// Nếu nhập sai answer quá 5 lần → in ra “Bạn đã thua cuộc”.
// let correct = Math.floor(Math.random() * 20) + 1;
// let attempts = 0;
// while (attempts < 5) {
//   let answer = parseInt(prompt("Hãy đoán một số từ 1 đến 20:"));
//   if (answer === correct) {
//     console.log("Đoán đúng!");
//     break;
//   } else {
//     console.log("Đoán sai!");
//     attempts++;
//   }
// }
// if (attempts === 5) {
//   console.log("Bạn đã thua cuộc!");
// }

//13. Nhập vào số n (2 <= n <= 10). Hãy in ra bảng cửu chương của số n
// let n = Number(prompt('Hãy nhập số n: '));
// if (n < 2 || n > 10) {
//   console.log("Số n không nằm trong khoảng cho phép (2 - 10)");
// } else {
//   for (let i = 1; i <= 10; i++) {
//     console.log(n + " x " + i + " = " + (n * i));
//   }
// }

//14. Nhập vào số n (n >= 2). Hãy in ra màn hình hình vuông có độ dài cạnh = n
// let n = Number(prompt('Hãy nhập số n: '));
// if (n < 2) {
//     console.log("Độ dài cạnh phải lớn hơn hoặc bằng 2");
//   } else {
//         for (var i = 0; i < n; i++) {
//             var row = '';
//             for (var j = 0; j < n; j++) {
//                 row += '* ';
//         }
//         console.log(row);
//     }
// }

//15. Nhập vào 2 số m, n (m >= 2, n > =2). Hãy in ra màn hình hình chữ nhật có độ chiều rộng là m và chiều cao là n
// let m = Number(prompt('Hãy nhập chiều rộng m: '));
// let n = Number(prompt('Hãy nhập chiều cao n: '));
// if (m < 2 || n < 2) {
//   console.log("Số m và n phải lớn hơn hoặc bằng 2");
// } else {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= m; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }

//16. Nhập vào số n (n >= 3). Hãy in ra màn hình hình tam giác vuông cân có độ dài cạnh góc vuông = n
// let n = Number(prompt('Hãy nhập số n: '));
// if (n < 3) {
//   console.log("Số n phải lớn hơn hoặc bằng 3");
// } else {
//   for (let i = 1; i <= n; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "* ";
//     }
//     console.log(row);
//   }
// }