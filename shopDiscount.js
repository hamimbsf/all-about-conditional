// total price after discount


// let amount = Number(prompt("Enter your amount: "))

// if (isNaN(amount) || amount<0) {
//   console.log("Invalid input");
// } else if (amount>0 && amount <=5000) {
//   console.log(amount);
// } else if (amount > 5000 && amount <= 7000) {
//   console.log(amount - Math.floor((5*amount)/100));
// } else if (amount > 7000 && amount <=9000) {
//   console.log(amount - Math.floor((10*amount)/100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((20*amount)/100));
// }

let amount = Number(prompt("Enter your amount: "))

let discount = 0

if (isNaN(amount) || amount<0) {
  console.log("Invalid input");
} else if (amount>0 && amount <=5000) {
  discount=0
} else if (amount > 5000 && amount <= 7000) {
  discount =5
} else if (amount > 7000 && amount <=9000) {
  discount =10
} else if (amount > 9000) {
  discount =20
}

console.log(amount - Math.floor((discount*amount)/100));
