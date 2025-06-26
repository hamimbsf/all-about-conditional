//Understanding Conditionals

// if (condition) { ... }

// condition মূলত দুইটি অংশে ভাগ করা যায়:
// ১। প্যারেনথেসিস `()` এর মধ্যে শর্ত
// ২। শর্ত সত্য হলে চলবে এমন ব্লক `{}` (একেই বলে Condition Block)

/*
if (এই প্যারেনথেসিস এর মধ্যে কন্ডিশন দিতে হয়) {
  এই অংশকে বলা হয় কন্ডিশন ব্লক / Condition Block
  উপরের কন্ডিশন true (সত্য) হলে এই ব্লকের কোড চালানো হবে
}
*/

// তাহলে কন্ডিশন কী? আর কী কী কন্ডিশন হতে পারে?

// Ans: বাংলাতে "কন্ডিশন" বলতে আমরা যেটাকে "শর্ত" বলি।
// জাভাস্ক্রিপ্ট ইঞ্জিন কন্ডিশনের ভ্যালু হিসেবে `true` বা `false` রিটার্ন করে।

// যেমন:
// 6 < 8 // এটা একটি শর্ত (condition), যার ফলাফল true হবে
// "Hamim" // এটা condition না, কিন্তু জাভাস্ক্রিপ্ট এটাকে truthy হিসেবে দেখে — পরে ব্যাখ্যা করা হবে

// উদাহরণ:
// let age = 16;

// if (age >= 18) {
//   // এখানে age >= 18 শর্তটি false, তাই নিচের কোড চালানো হবে না
//   console.log("You can vote");
// } else {
//   // if ব্লকের শর্ত মিথ্যা হওয়ায় else ব্লক চালানো হয়েছে
//   console.log("You can't vote");
// }

// 🔔 Note:
// শুধুমাত্র if থাকার পরেই else ব্যবহার করা যায়।
// যদি শুধু else ব্লক লিখে কোড চালাতে চাও, তাহলে Syntax Error হবে।
// তবে if independent, if স্বাধীন ভাবে বসতে পারে if এর জন্য else এর প্রয়োজন হয় না

// ভুল:
// else {
//   console.log("hi");
// }

// else if vs if

// else if

// let age = 65;

// if (age >= 18 && age <= 50) {
//   console.log("You are adult");
// }
// else if (age < 18) {
//   console.log("You are young");
// }
// else {
//   console.log("You are old");
// }

/* if (age >= 18 && age <= 50)

  •	এখানে দুটি শর্ত চেক করা হচ্ছে:
	•	age >= 18 → বয়স ১৮ বা তার বেশি কিনা
	•	age <= 50 → বয়স ৫০ বা তার কম কিনা
	•	&& (AND Operator) ব্যবহার করা হয়েছে — মানে দুটি শর্ত একসাথে সত্য হতে হবে।

📌 আমাদের কোডে age = 65
✔️ প্রথম শর্ত age >= 18 সত্য ✅
❌ দ্বিতীয় শর্ত age <= 50 মিথ্যা ❌
🔸 তাই পুরো if block চালানো হয়নি।

*/

/* else if (age < 18)

	•	যদি প্রথম শর্ত false হয়, তাহলে JavaScript ইঞ্জিন এই শর্ত চেক করে।
	•	এখানে দেখা হচ্ছে — age কি ১৮ এর কম?

📌 আমাদের age = 65, যা ১৮ এর বেশি — তাই এটাও false।
*/


/* else {
  console.log("You are old");
}

	•	উপরের সব শর্ত যদি false হয়, তাহলে else block চলবে।
	•	এখানে আর কোনও শর্ত যাচাই করা হয় না — সরাসরি কোড চালানো হয়।

📌 তাই You are old প্রিন্ট হয়েছে ✅
*/


// 🔔 Note:•	else if এবং else সবসময় if এর পরে ব্যবহার করতে হবে।
// যদি if না থাকে, তাহলে else if বা else আলাদাভাবে কাজ করবে না — Syntax Error হবে।

/* if vs else if */

/* if vs else if */


// let age = 65

// কোড ১
// if (age>=18 && age>50 ) {
//   console.log("You are adult");
// }
// else if(age>60){
//   console.log("You are old");
// }
// else {
//   console.log("You are young");
// }

// কোড ২
// if (age>=18 ) {
//   console.log("You are adult");
// }
// if(age>60){
//   console.log("You are old");
// }
// else {
//   console.log("You are young");
// }


// উপরের দুইটা কোডের মধ্যে পার্থক্য গুলো নিচে বাখ্যা দেয়া হলো

// if যেহেতু ইন্ডিপেন্ডেন্ট সেহেতু সে প্রত্যেকবার চেক করবে প্রতিটা if'ই এক একটা কন্ডিশন ;সেহেতু কোড ২ এ দুইটা ভ্যালুই রিটার্ন করেছে । সেহেতু আউটপুট এর ভিত্তিতে আপনার কন্ডিটন লিখতে হবে
