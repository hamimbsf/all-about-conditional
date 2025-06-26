/* Ternary Operator */

// Ternary Operator হলো একটি compact (সংক্ষিপ্ত) conditional expression,
// যা "?" এবং ":" ব্যবহার করে লেখা হয়।

// এর সিনটেক্স হলো :

// condition ? expression_if_true : expression_if_false;

// যদি শর্ত true হয় তাহলে "?" এর পরের অংশ চলবে আর যদি false হয় তাহলে ":" এর পরের অংশ চলবে

// let a = 9

// a > 10
//   ? console.log("a is bigger than 10")
//   : console.log("a is smaller than 10");

/* Nested Ternary Operator */
// let a = 0;

// console.log(
//   a > 0
//     ? "Positive"
//     : a < 0
//       ? "Negative"
//       : "Zero"
// );

// nested ternary operator (if -> else if -> else) এই সিনটেক্সে কাজ করার জন্য ব্যবহার করা হয়।

// এখানে প্রথমে চেক করছে: a > 0
// যদি true হয় ➤ প্রিন্ট করবে "Positive"
// না হলে ➤ চলে যাবে পরের কন্ডিশনে: a < 0
// যদি এইটা true হয় ➤ প্রিন্ট করবে "Negative"
// আর দুইটাই যদি false হয় ➤ প্রিন্ট করবে "Zero"

// 🎯 যখন প্রথম শর্ত false হয়, তখন ':' এর পর আমরা চাইলে আরেকটা ternary বসাতে পারি — একে বলে nested ternary

