# 📘 ALL-ABOUT-CONDITIONALS

এই প্রজেক্টটি JavaScript-এর কন্ডিশনাল স্টেটমেন্ট (যেমন `if`, `else if`, `else`, এবং `ternary operator`) শেখার জন্য বানানো হয়েছে। এখানে বাস্তব জীবনের কিছু সমস্যার সমাধান কন্ডিশনের মাধ্যমে দেখানো হয়েছে যেন নতুন শিক্ষার্থীরা সহজে বুঝতে পারে।

---

## 📂 Project Structure

| ফাইলের নাম               | কাজ কী করে? |
|--------------------------|--------------|
| `validVoter.js`          | বয়স ইনপুট নিয়ে যাচাই করে আপনি ভোটার কিনা। |
| `bdtDenomination.js`     | একটি নির্দিষ্ট টাকা কতগুলো টাকার নোটে ভাগ করা যায় তা বের করে। |
| `electricityBill.js`     | বিদ্যুৎ বিল ক্যালকুলেট করে ইউনিটের উপর ভিত্তি করে। |
| `shopDiscount.js`        | শপিং এর পরিমাণ অনুযায়ী ছাড় দেয়। |
| `ternaryOperator.js`     | `ternary operator` দিয়ে কন্ডিশন হ্যান্ডল করার উদাহরণ। |
| `script.js`              | অন্যান্য সাধারণ JavaScript কোড থাকতে পারে। |
| `index.html`             | এইচটিএমএল ফাইল যেখানে স্ক্রিপ্ট সংযুক্ত করা যায়। |
| `README.md`              | এই ডকুমেন্টেশন ফাইল। |


## 🚀 Topics Covered

- `if`, `else if`, `else` কিভাবে কাজ করে
- `ternary operator` কিভাবে ব্যবহার করতে হয়
- কিভাবে বাস্তব উদাহরণ দিয়ে লজিক বোঝা যায়
- ছোট ছোট সমস্যার সমাধান কিভাবে করা যায়

---
## 🧑‍💻 Author

**Hamim Hossain**
Beginner-Friendly JavaScript Educator 🇧🇩
📘 Portfolio: [hamimibnhannan.netlify.app](https://hamimibnhannan.netlify.app)
📘 Blog Series: Coming soon...

## 💡 Example Snippet

```js
let amount = 500;
let discount = amount > 1000 ? "২০%" : amount > 500 ? "১০%" : "৫%";
console.log(`আপনার ডিসকাউন্ট হলো ${discount}`);

