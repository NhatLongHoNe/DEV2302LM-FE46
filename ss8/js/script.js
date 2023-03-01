// console.log("xin chào cách nhúng thứ 2")

// function hello(){
//     alert("hello click")
// }
// example for if else
// var a = -99;

// if(a==0){
//     alert("a bằng 0");
// }else if(a > 0){
//     alert("a lớn hơn 0");
//     // if lồng nhau
//     if(a>100){
//         alert("a lớn hơn 100");
//     }
// }else{
//     alert("a nhỏ hơn 0");
// }

// đóng comment ctrl + /
// ctrl + k + c or ctrl + k + u
// switch case
// var thang = 13;

// switch(thang){
//     case 1: 
//         console.log("tháng 1");
//         break;
//     case 2: 
//         console.log("tháng 2");
//         break;
//     case 3: 
//         console.log("tháng 3");  
//         break;
//     default:  
//         console.log("không tồn tại tháng này"); 
//         break;
// }

// for(var i = 0; i < 100;i++){
//     console.log(i);
// }

// tránh để vòng lặp vô hạn
// for(var i = 0; i < i+1;i++){
//     console.log(i);
// }
// chạy câu lệnh trước mới check điều kiện
//  var i = 0;
// do{
//     i=i+2
//     console.log(i);
// }while(i < 100)

// //  check điều kiện trước rồi mới chạy câu lệnh
// //  var i = 0;
// while(i < 100){
//     i=i+3
//     console.log(i);
// }

// var arr = ['js','html','css'];
// //debugger
// console.log("for");
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// console.log("for in");
// for (const item in arr) {
//     console.log(item);
// }

// console.log("for of");
// for (const item of arr) {
//     console.log(item);
// }

// khởi tạo mảng
// lưu trữ các phần tử
// var array1 = [];
// var array = new Array(1,2,5,6);

// console.log(array1);
// console.log(array[2]);

// var arr = ['ts','js','html','css'];
// var arr2 = ['angular','php','dotnet'];

// // arr.valueOf();

// // thêm phần tử vào trong mang
// arr.push("C#")
// // // xóa phần tử cuối cùng trong mảng
// // arr.pop();
// // // xóa phần tử đầu tiên của mảng
// arr.shift();
// // sắp xếp mảng
// arr.sort();
// // nối mảng
// var data = arr.concat(arr2); //cách 1
// var newArr = [...arr,...arr2]; // cách 2

// // lấy phần tử trong mảng để tạo ra mảng mới ở vị trí start = 1;end = 3
// //arr.slice(1,3)

// console.log();


// function twoSum(a ,b){
//     return a+b;
// }

// function twoSumV2(a ,b){
//     console.log(a+b);
// }

// var so1 = 5;
// var so2 = 10;

// console.log(twoSum(so1,so2));

var str = 'a Xin Chào Devmaster';

// console.log(str.charCodeAt(0))

for (let index = 0; index < str.length; index++) {
    console.log(str[index]);
}

var newArrStr = str.split(' ');
console.log(newArrStr);

console.log(str.toLowerCase());
console.log(str.toUpperCase());