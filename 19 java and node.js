/ const myName =[];
// console.log(myName);
// myName.push("John");
// console.log(myName);

// let myName="john";
// console.log(myName);
// myName=5;
// console.log(myName)


//string interpolation
// let firstName="bhargav";
// let lastName="rana";

// // let fullName= firstName + " "+lastName
// let fullName=`${firstName} ${lastName}`;
// console.log(fullName);
// console.log(firstName);

// function addTwoNumbers(num1,num2) {
// return num1 + num2;
// }
// console.log(addTwoNumbers(1,2));

// let addTwoNumbers=(num1,num2=5)=> {
// console.log(num1);
// console.log(num2);
// return num1 + num2 ;
// };
// console.log(addTwoNumbers(1,20));

//rest and spread operator are applicable in arrays and objects in js
// let array=[5,10,29,10,29];
// //spread operator
// let newArray= [...array,100,75];
// console.log(newArray);



//rest operators
// let testFunction =(...args)=> {
// console.log(args);
// };

//max of two elements
// let maxOfTwoNumbers =(num1,num2)=>Math.max(num1.num2);
// let maxOfThreeNumbers =(num1,num2,num3)=>Math.max(num1,Math.max(num2,num3));

//rest by
// maxOfNumbers=(...numbers)=> {
// let maximum =Number.MIN_VALUE;
// for (let number of numbers) {
// maximum=Math.max(maximum,number);
// }
// return maximum;
// }
// console.log(maxOfNumbers(1,5,3,4,5,6));

//for object
// let object ={
// name:"John",
// age:24,
// address:{
// city:"New York",
// },
// };

// let object2={...object,country:"america"}
// console.log(object2);
// object2.address.city="NewYork";
// console.log(object2);
