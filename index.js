// Code your solution here
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((acc,item) => item + acc, 0);
console.log(totalBatteries)




// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ]
// function getTotalAmountForProducts(products){
//     let total = 0
//      for(let item of products){
//         total += item.price
//      };
//      return total;
// }
// console.log(getTotalAmountForProducts(products));

// const numbers = [1,2,3,4,5]
// const addNumber = numbers.reduce((acc,item)=> item + acc, 0);
// console.log(addNumber);