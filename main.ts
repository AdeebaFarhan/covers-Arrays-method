//Arrays

//Push method

let number: number[] = [1, 2, 3, 4, 5];
number.push(6); //using push method for add number in above arrray
console.log(number);

//Pop method 

let names: string[] = ["Zoya", "Adeeba", "Hamza", "Farhan", "Kiran"];
names.pop();     //using pop element for delete or remove last name
console.log(names);

//Shift
let primaryColors: string[] = ["Red", "Green", "Blue"];
primaryColors.shift(); //using shift element for remove "Red" in array
console.log(primaryColors);

//Unshift
let statements: boolean[] = [true, false, false, true];
statements.unshift(false, true, false);  //using unshift element for add one or more values in arrray
console.log(statements);

//Slice
// example : 01
let items: string[] = ["pencile", "paper", "eraser", "scale"];
let subset = items.slice(1, 3);
console.log(subset);
console.log(items);

//example : 02
let gases: string[] = ["Hydrogen", "Oxeygen", "Carbondioxide", "Nitrogen"]
let newArr: string[] = gases.slice(0, 2);
console.log(newArr);

//example: 03
let number: number[] = [2, 5, 0, 6, 2, 0, 0, 4];
let newArr: number[] = number.slice(2, 7);
console.log(newArr);

//Splice
let gases: string[] = ["Hydrogen", "Oxeygen", "Carbondioxide", "Nitrogen"]
let deletedElements = gases.splice(1, 2, "carbon monoxide", "propane");
console.log(gases);

let myNumber: number[] = [1, 2, 3, 4, 5]
myNumber.splice(0, 0, 4);
console.log(myNumber)

let myRoutine: string[] = ["Morning", "Afternoon", "Evening", "Night"]
console.log(myRoutine)

myRoutine.splice(0, 0, "Fajar prayer");
console.log(myRoutine)

myRoutine.splice(1, 0, "Do work");

myRoutine.splice(2, 0, "Lunch");

myRoutine.splice(3, 0, "Study");

myRoutine.splice(4, 0, "Dinner");

console.log(myRoutine);
