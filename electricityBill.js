// calculate electricity bill
let unit = Number(prompt("Enter electricity unit: "))

let amount = 0

if (isNaN(unit) || unit < 0) {
  console.log("Invalid input");
} if (unit > 400) {
  let restUnit = unit - 400
  amount = restUnit *13
  unit = unit - restUnit
  // console.log(amount);
  // console.log(unit);
} if (unit >200 && unit <=400) {
  let restUnit = unit - 200
  amount += restUnit *8
  unit = unit - restUnit
  // console.log(amount);
  // console.log(unit);
} if (unit >100 && unit <=200) {
  let restUnit = unit - 100
  amount += restUnit *6
  unit = unit - restUnit
  // console.log(amount);
  // console.log(unit);
} if (unit >0 && unit <=100) {
  let restUnit = unit
  amount += restUnit *4
  unit = unit - restUnit
  // console.log(amount);
  // console.log(unit);
}


 console.log(amount);
 console.log(unit);


