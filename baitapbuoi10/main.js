// Bài 1: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 
// mảng cho bên trên. (sử dụng filter()).
const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];
const commonElements = arr1.filter(element => arr2.includes(element));
console.log(commonElements);
// Bài 2: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
const arr = [1, 54, 6, 7];
const newArr = arr.map(element => element + 5);
console.log(newArr);
// Bài 3: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử 
// có giá trị bằng 1, 8,10,96,7.
const m = [1, 2, 4, 5, 6, 7];
const n = [3, 5, 675, 8, 96];
function removeElements(arr) {
    const removeValues = [1, 8, 10, 96, 7];
    return arr.filter(element => !removeValues.includes(element));
}
const filteredM = removeElements(m);
const filteredN = removeElements(n);
console.log(filteredM);
console.log(filteredN);
// Bài 4: Cho array 1 như sau: players = [
    // { id: 11, name: 'Messi', age: 33 },
    // { id: 12, name: 'Ronaldo', age: 34 },      
    // { id: 13, name: 'Young', age: 35 },        
    // { id: 14, name: 'Mane', age: 21 },          
    // { id: 15, name: 'Salah', age: 24 },
// ]
// Hãy chuyển đổi nó về array có dạng sau: playersModified = 
// { 
// 11: {id: 11, name: "Messi", age: 33},
// 12: {id: 12, name: "Ronaldo", age: 34},
// 13: {id: 13, name: "Young", age: 35},
// 14: {id: 14, name: "Mane", age: 21},
// 15: {id: 15, name: "Salah", age: 24}
// }.
const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
];  
const playersModified = players.reduce((acc, player) => {
    acc[player.id] = player;
    return acc;
}, {});  
console.log(playersModified);