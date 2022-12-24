/** Q1 About Javascript Dates
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */
 
// function to change the date to ISO system
function reverseString(x) {
  let Arr = x.split(" ");
  let str = Arr[0];
  var splitString = str.split("/");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("/");
  Arr[0] = joinArray;
  return Arr;
}

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
  DateArr = [t1Start, t1End, t2Start, t2End];
  for (let i = 0; i < 4; i++) {
    newArr = reverseString(DateArr[i]);
    DateArr[i] = newArr[0].concat(" " + newArr[1]);
  }
 
  t1End = new Date(DateArr[1]);
  t2Start = new Date(DateArr[2]);
  timeDefrance = t1End - t2Start;
  
  let resulte = "";
  if (timeDefrance < 0) {
    resulte = "no Overlap";
  } else {
    resulte = "Overlap";
  }
  return resulte;
}
console.log(
  CheckOverlap(
    "13/5/2021 13:00",
    "14/5/2021 13:00",
    "14/5/2021 13:00",
    "16/5/2021 13:00"
  )
);

/** Q2
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  let Lshose = 0;
  let Rshose = 0;
  let Pairs = 0;
  const myArr = shoes.split("");
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] === "R") {
      Rshose++;
    }
    if (myArr[i] === "L") {
      Lshose++;
    }
  }
  if (Rshose >= Lshose) {
    Pairs = Lshose;
  } else {
    Pairs = Rshose;
  }
  return Pairs;
}
console.log(HowManyPairs("RLRLRRLLLLLRLL"));
