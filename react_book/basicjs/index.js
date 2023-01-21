/** @format */

// Variables (let, const, var)
// Ternary Operator
// Spread Operator
// Destructuring
// Arrow Functions
// Modules
// Array Methods like .map()
// Classes

// Variables (let, const, var)
// Variables
// Before ES6 there was only one way of defining your variables:
// with the var keyword. If you did not define them,
// they would be assigned to the global object.
// Unless you were in strict mode, then you would get an error if
// your variables were undefined.

// Now, with ES6, there are three ways of defining your variables:
// var, let, and const.

// const data = [444,445,45,753,5,576,4,];

// Ternary Operator
// The ternary operator is a simplified conditional operator like if / else.

// Syntax: condition ? <expression if true> : <expression if false>

// Here is an example using if / else:

// if (condition){

// }else{

// }
// 2==4

// condition ? 'yes': 'no';

// try:

// const age = 40;
// if (age== 50) {
//     console.log('yes');
// }else{
//     console.log('no');
// }

// age ?  console.log('yes') : console.log('no');

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// console.log(numbersOne,numbersTwo);

// const data = [...numbersOne,...numbersTwo]

// console.log(data);

// const numbers = [1, 2, 3, 4, 5, 6];
// const [one, two, ...sika] = numbers;

// console.log(sika);

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red',
// };

// const updateMyVehicle = {
//   type: 'car',
//   year: 2021,
//   color: 'yellow',
//   brand: false,
// };

// // const newObj ={...myVehicle,...updateMyVehicle}

// // console.log(newObj);

// Destructing
// Destructing Array

const vehicles = ['mustang', 'f-150', 'expedition'];
// const a =vehicles[0];
// const b =vehicles[1];
// const c =vehicles[2];

// const [a,c]=vehicles;
// console.log(a);

// console.log(c);

// const myVehicle = {
//   brand: 'Ford',
//   model: 'Mustang',
//   color: 'red',
// };
// const { brand } = myVehicle;

// console.log(brand);
// console.log(myVehicle.brand);

// const vehicleOne = {
//   brand: 'Ford',
//   model: 'Mustang',
//   type: 'car',
//   year: 2021,
//   color: 'red',
//   registration: {
//     city: 'Houston',
//     state: 'Texas',
//     country: 'USA',
//   },
// };

// const {state}=vehicleOne.registration;
// console.log(state);



// function jack(){
//   return 'jacckkyyy'
// }



// const jack = ()=> 'jacckkyyy';
// jack()



// function jack(){
//   return 'jacckkyyy'
// }

// export default jack;


// Array Methods
// There are many JavaScript array methods.
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on 
// each item in the array, returning a new array as the result.
// In React, map() can be used to generate lists.

const myArray = ['apple', 'banana', 'orange'];


// myArray.map((v,i,arr)=>{console.log(arr[i])});



class Car  {
  constructor(name,size){
    this.name ="maley"
    this.size =size

  } 
}

class Model extends Car{
  constructor(name,model){
    super(name);
    this.model = model

  } 
}

const js =new Model("kofi",45)
console.log(js);
    
// const qwerty =new Car("nkdsxkgn",4)