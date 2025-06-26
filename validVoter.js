// valid voter

let age = Number(prompt("Enter your age:"))

if (isNaN(age)|| age < 0) {
  console.log("Invalid input");
}
else if (age>=18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}
