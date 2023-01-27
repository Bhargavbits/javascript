//map function
// let array=[1,2,3,4,5];
// let newArray=[];
// for (let i=0;i<array.length;i++) {
//     newArray[i]=array[i]*array[i];
// }
// console.log(newArray);


// let array=[1,2,3,4,5];
// function functionForMap(element) {
//     return element*element;
// }
// let newArray=array.map(functionForMap);
// console.log(newArray);
// let addTwoNumbers=(a,b) =>a+b;
// let num1=4;
// let num2=5;
// addTwoNumbers(num1,num2);


//in js a function is also js object

// let array=[1,2,3,4,5];
// let newArray=array.map((element,index)=>{element*element});
// console.log(newArray);


//2/for each loop
// let array=[1,2,3,4,5];
// array.forEach((element) =>{
//     console.log(element);
// })

// let array=[1,2,3,4,5];
// array.forEach((element) =>{
//     element*=element;
//     console.log(element);
// });
// console.log("Array is:",array);


//3.filter()

// List<Integer>list=new ArrayList<>();
// for (int i=0;i<Array.length;i++) {
//     if(array[i]>=30) {
//         list.add(array[i]);
//     }
// }
// let array=[1,2,3,40,5];
// let newArray=array.filter((element)=>element>=30); 
//     console.log(newArray);

//in java
// int[] newArray.stream(.filter(element->{
//     return element>=30;

// })).toArray(int[]::new);

//.find
// let array=[1,2,3,4,5];
// let temp=array.find((value)=> {
//     return value > 2;
// });
// console.log(temp);

//.sort()

/*let array = [50, 40, 30, 20, 10, 111];
let sortedArray = array.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortedArray);*/


//object Destructuring

/*let details = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "new york",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
let myName = details.name;
let age = details.age;
console.log(myName, age);*/


//Maps & set 

/*let map = new Map();
map.set(1, "john");
map.set(2, "alex");
console.log(map);
let set = new Set();
set.add(1);
set.add(2);
console.log(set);*/

//class

// class Animal {
//     noofLegs;
//     color;
//     family;
//     sound;
//     constructor(noofLegs, color, family, sound) {
//         this.noofLegs = noofLegs;
//         this.color = color;
//         this.family = family;
//         this.sound = sound;
//     }
// }
// let animal = new Animal(4, "brown", "rodent", "something");
// console.log(animal);
