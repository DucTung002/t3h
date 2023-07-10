// Cách khởi tạo array
// C1
// let arr = []; //Mảng rỗng
// let arr = [1, 2, 3, 'a', 'abc', true, null, undefined, [4, 5, 6]];
// C2
// let arr = new Array(1, 2, 3,);
// console.log(arr);
// Update mảng
// arr[0] = 'xyz';
// console.log(arr);
// Kiểm tra độ dài của mảng
// console.log(arr.length);
// Duyệt mảng
// C1
// console.log(arr[0]);
// console.log(arr[0]);
// console.log(arr[0]);
// ...
// console.log(arr[0]);
// C2
// for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
// }

// 1. Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// let arr = [1, 2, 3, 4];
// In ra phần tử có chỉ số 0 và 3 trong mảng.
// console.log(arr[0], arr[3]);
// Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// let tong = arr[1] + arr[2];
// console.log(tong);
// Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// Cách hay làm
// let temp = arr[1];
// arr[1] = arr[3];
// arr[3] = temp;
// console.log(arr);

// C1:
// for(let i = 0; i < arr.length; i++) {
    // console.log(i);
    // console.log(arr[i]);
// }
// C2:
// for (let number of arr) {
    // console.log(number);
// }

// Duyệt mảng
// 1. Khai báo 1 mảng gồm các số bất kỳ.
// let sum = 0;
// let arr = [1, 2, 3, 4, 5, 6];
// Hãy in ra các số chẵn trong mảng đó.
// for (let number of arr) {
    // if (number % 2 == 0) {
        // console.log(number);
    // }
// }
// Hãy tính tổng các phần tử trong mảng.
// for (let number of arr) {
        // sum = sum + number;
// }
// console.log(sum);
// Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = arr[0];
// for (let number of arr) {
    // if (number < min) {
        // min = number;
    // }
// }
// console.log(min);

// Thêm phần tử trong mảng
// Thêm vào cuối mảng
// let arr = [1, 2, 3, 4];
// arr.push(5, 6);
// console.log(arr);
// Thêm vào đầu mảng
// let arr = [1, 2, 3, 4];
// arr.unshift(5, 6);
// console.log(arr);
// Thêm phần tử ở giữa
// Cú pháp: splice(index, 0, element, ..., elementN)
// let arr = [1, 2, 3, 4];
// arr.splice(4, 0, 5);
// console.log(arr);

// Xóa phần tử trong mảng
// Xóa phần tử cuối mảng
// let arr = [1, 2, 3, 4];
// arr.pop();
// console.log(arr);
// Xóa phần tử đầu mảng
// let arr = [1, 2, 3, 4];
// arr.shift();
// console.log(arr);
// Xóa phần tử ở giữa
// Cú pháp: splice(index, deleteCount)
// let arr = [1, 2, 3, 4];
// arr.splice(2, 2);
// console.log(arr)

// 1. Khai báo 1 mảng gồm các số bất kỳ. 
// Tính tích của các phần tử trong mảng đó.
// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.
// Tìm số lớn nhất mà chia hết cho 3 trong mảng.
// Tính giá trị trung bình của mảng.
// Lọc ra các số nguyên tố trong mảng.
// const numbers = [2, 3, 4, 5, 6, 7, 8];
// const primeNumbers = numbers.filter(number => {
//   for (let i = 2; i < number; i++) {
    // if (number % i === 0) {
    //   return false;
    // }
//   }
//   return number > 1;
// });
// console.log(primeNumbers);
// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// Nhập vào số n cho đến khi n là 1 số trong mảng s.
// const primeNumbers = numbers.filter(number => {
    // for(let i = 2; i < number; i++) {
        // if (number % i === 0) {
            // return false;
        // }
    // }
    // return number > 1;
// });
// console.log(primeNumbers);