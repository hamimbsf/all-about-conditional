// total price after discount

// Code type 1

let amount = Number(prompt("Enter your amount: "))

if (isNaN(amount) || amount<0) {
  console.log("Invalid input");
} else if (amount>0 && amount <=5000) {
  console.log(amount);
} else if (amount > 5000 && amount <= 7000) {
  console.log(amount - Math.floor((5*amount)/100));
} else if (amount > 7000 && amount <=9000) {
  console.log(amount - Math.floor((10*amount)/100));
} else if (amount > 9000) {
  console.log(amount - Math.floor((20*amount)/100));
}



/*
✅ Step 1: ইউজার ইনপুট নেওয়া

let amount = Number(prompt("Enter your amount: "));
ইউজার কত টাকা দিয়েছে তা prompt দিয়ে ইনপুট নিচ্ছে

ইনপুট স্ট্রিং টাইপ হওয়ায় Number() দিয়ে নাম্বারে রূপান্তর করছে

✅ Step 2: ইনপুট ভ্যালিড কিনা চেক করা

if (isNaN(amount) || amount < 0) {
  console.log("Invalid input");
}
যদি ইনপুট সংখ্যা না হয় বা ০ এর কম হয় ➤ “Invalid input” দেখাবে

শুধু এই শর্ত সত্য হলে বাকি কোড আর চলবে না

✅ Step 3: ডিসকাউন্ট ক্যালকুলেশন (amount-এর রেঞ্জ অনুযায়ী)
🔹 ৫০০০ টাকার নিচে বা সমান হলে:

else if (amount > 0 && amount <= 5000) {
  console.log(amount);
}
কোনো ডিসকাউন্ট নেই, তাই পুরো amount টাকাই প্রিন্ট করবে

🔹 ৫০০১–৭০০০ → ৫% ডিসকাউন্ট:

else if (amount > 5000 && amount <= 7000) {
  console.log(amount - Math.floor((5 * amount) / 100));
}
🔹 ৭০০১–৯০০০ → ১০% ডিসকাউন্ট:

else if (amount > 7000 && amount <= 9000) {
  console.log(amount - Math.floor((10 * amount) / 100));
}

🔹 ৯০০০ টাকার বেশি → ২০% ডিসকাউন্ট:

else if (amount > 9000) {
  console.log(amount - Math.floor((20 * amount) / 100));
}
// */

// Code type 2
// let amount = Number(prompt("Enter your amount: "))

// let discount = 0

// if (isNaN(amount) || amount<0) {
//   console.log("Invalid input");
// } else if (amount>0 && amount <=5000) {
//   discount=0
// } else if (amount > 5000 && amount <= 7000) {
//   discount =5
// } else if (amount > 7000 && amount <=9000) {
//   discount =10
// } else if (amount > 9000) {
//   discount =20
// }

// console.log(amount - Math.floor((discount*amount)/100));
