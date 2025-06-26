// 🔰 BDT Denomination Breakdown (বাংলাদেশি টাকা ভাগ)

// ইউজার থেকে ইনপুট নেওয়া
let tk = Number(prompt("Enter your money:"));

// বড় নোট থেকে শুরু করে ছোট নোট পর্যন্ত এক এক করে চেক করা হচ্ছে
if (isNaN(tk)||tk<0) {
  console.log("Invalid input");
}
if (tk >= 500) {
  console.log("500 TK note =", Math.floor(tk / 500));
  tk = tk % 500;
}
if (tk >= 200) {
  console.log("200 TK note =", Math.floor(tk / 200));
  tk = tk % 200;
}
if (tk >= 100) {
  console.log("100 TK note =", Math.floor(tk / 100));
  tk = tk % 100;
}
if (tk >= 50) {
  console.log("50 TK note =", Math.floor(tk / 50));
  tk = tk % 50;
}
if (tk >= 20) {
  console.log("20 TK note =", Math.floor(tk / 20));
  tk = tk % 20;
}
if (tk >= 10) {
  console.log("10 TK note =", Math.floor(tk / 10));
  tk = tk % 10;
}
if (tk >= 5) {
  console.log("5 TK note =", Math.floor(tk / 5));
  tk = tk % 5;
}
if (tk >= 2) {
  console.log("2 TK note =", Math.floor(tk / 2));
  tk = tk % 2;
}
if (tk === 1) {
  console.log("1 TK note = 1");
}

// ❓ এখানে একটা প্রশ্ন আসতে পারে: কেন আমি এখানে if else ব্যবহার করিনি?

// 🔍 কারণ if...else ব্যবহার করলে, প্রথম শর্ত যদি সত্য (true) হয় — তাহলে শুধু সেই block ই চালাবে,
// এরপর আর কোনো else if বা else চেক করবে না।

// 🎯 মনে রাখতে হবে: if block চালালে, পরের else if বা else আর কখনো রান করে না।
// কিন্তু এখানে আমাদের প্রয়োজন — প্রতিটি denomination (নোট) এর জন্য আলাদা আলাদা শর্ত চেক করা,
// যেন একসাথে অনেকগুলো নোট বের করা যায়।

// ✅ তাই এখানে শুধুমাত্র multiple if ব্যবহার করা হয়েছে, যাতে প্রতিটি শর্ত আলাদা করে যাচাই হয় এবং প্রযোজ্য হলে সবগুলোই চালানো যায়।

