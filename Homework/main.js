// function sum(number) {
//     let  count = number;
//     return function () {
//         return ++count;
//     }
// }
// const num = sum(3);
// console.log(num())
// console.log(num());


// function sum() {
//     let arr = [];
//   return function (number) {
//       arr.push(number)
//       return arr;
//     };
// }
// const num = sum();
// console.log(num("Hello"));
// console.log(num("world"));


// function sum() {
//     let result = "";
//     return function (number) {
//     result+=` ${number}`
//     return result;
//   };
// }
// const num = sum();
// console.log(num("Hello"));
// console.log(num("world"));


function sum() {
    let sum = 0;
    return [plus,minus]
    function plus (plus) {
        sum += plus;
        return sum;
    }
    function minus(minus) {
         return sum -= minus
     }
}
const [plus, minus] = sum()
console.log(plus(10));
console.log(plus(20));
console.log(minus(30));