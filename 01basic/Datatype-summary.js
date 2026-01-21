//Primitive (data by value)
const Score = 100;
const ScoreValue = 100.3;

const isLoggedIn = false;

const OutsideTemp = false ;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 2356999990000n;


//non-primitive data types(Reference)
// 1.Array
// 2.Objects
// 3.Functions


const heros = ["Shaktimaan" ,"Dora" , "naagraaj"]

let myobj = {
    name:"Priya Yadav",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros)



/************************************** Stack and heap ************************/

let MyEmailId = "priyayadavdotcom";
let anothername = MyEmailId;
anothername = "prishu"
console.log(MyEmailId);
console.log(anothername);


let userone = {
    Email:"Priyayadav@microsoft.com",
    position : "Software Engineer"
}

let userTwo = userone;
userone.Email = "Prishu@microsoft.com"
console.log(userone.Email)
console.log(userTwo.Email)