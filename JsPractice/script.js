function sayHello(name) {
    console.log("Hello, " + name + "!");
}

var greet =["John","doe","Smith","Jane","Emily"];
var age = 30;
var isStudent = true;


var person = {
    name: "Alice",
    age: 25,
    isStudent: false
};

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Is Student:", isStudent);
// console.log("Hobbies:", hobbies);
// console.log("Marks:", marks);
// console.log("Person Object:", person);

// let sum=10;
// console.log(sum);
// sum=29;
// console.log(sum);

// const pi=3.14;
// console.log(pi);
// pi=68;
// console.log(pi);

// name="Jane";
// console.log(name);

var a=200;
var b=500;
var sum=a+b;
var c=200.0;
// console.log("Sum:",sum);
// if(a<b) {
//     console.log("a is less than  b");
// }
// else if(a===b){
//     console.log("a is equal to b");
// }
// else{    console.log("a is greater than  b");

// }
// for(let i=0;i<5;i++){
//     console.log("FirstLoop:",i);
// }
// for(var j=0;j<5;j++){
//     console.log("secondLoop:",j);
// }

// do{
//     console.log("DoWhileLoop:",a);
//     // a+=50;
//     a=a+50;
// }
// while(a<500){
    
    
// }
// for(const k of hobbies){
//     console.log("Hobby:",k);
// }
   
for(const i of greet){
    // console.log("name:",i);
    sayHello(i);
    
}
var hobbies = ["reading", "traveling", "coding"];
var marks = [92, 88, 95];
const marks2 = [85, 90, 78];
// sayHello=()=>{
//     console.log("Hobbies:", hobbies);
//     console.log("Marks:", marks);
// }

for(const mark of marks){
    console.log("Mark:",mark);
}
// marks.push([95]);
// console.log("Updated Marks:", marks);
// marks.pop();
// console.log("Marks after pop:", marks);
// marks.unshift([88]);
// console.log("Marks after unshift:", marks);
// marks.shift();
// console.log("Marks after shift:", marks);
// marks.slice(1, 2);
// console.log("Sliced Marks:", marks);

// console.log("Total Marks:", marks + marks2);
// var totalMarks = marks.concat(marks2);
// console.log("Total Marks:", totalMarks);
// var totalMarks2 = [...marks, ...marks2];
// var totalMarks3 = marks.join(", ") + ", " + marks2.join(", ");
// console.log("Total Marks (Spread):", totalMarks2);
// console.log("Total Marks (Join):", totalMarks3);

// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map(function( num) {
    
//   return num * 2;
// });
// console.log("Doubled Numbers:", doubledNumbers);


// numbers.map(num => num * 2);

// var a=10;
// a=a+100;
// a+=100;
// console.log(a);


marks[0]=95;
console.log("Updated Marks:", marks);
 marks.sort();
 console.log("Sorted Marks:", marks);
 marks.reverse();
 console.log("Sorted Marks (Descending):", marks);



// const person1 = {
//     name: "Alice",
//     age: 25,
//     isStudent: false
// };
// console.log("Person 1:", person1);

var a=10;
var b=20;
console.log("before swap","a:",a,"b:",b);
a=a+b; // a=10+20=30 a=30
b=a-b;// b=30-20=10 b=10
a=a-b;// a=30-10=20 a=20

console.log("after swap","a:",a,"b:",b);

1-4
10
n(n+1)/2
4(4+1)/2