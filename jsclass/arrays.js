// An array is a special variable, which can hold more than one value

// const cars = ["Saab", "Volvo", "BMW"];

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";

// console.log(["Saab", "Volvo", "BMW"][0])
// console.log(cars[1])
// console.log(cars[2])
// const friends =[ 'kofi','ama','kwesi','randy']
// friends[3]=[1,2,4]
// console.log(friends)


const arr = new Array('kofi','ama','kwesi','randy')
// console.log(arr.join('30'))
// console.log(arr.toString())
// arr.pop()
// arr.push("kiki")
// arr.shift()
// arr.unshift("paul")
// arr.
// delete arr[0];
// console.log(arr)
// const name  = 'kofi kumi'
 

// function username(n){
//     return n.split(" ")[0]
// }
// console.log(username(name))  




const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits)
// fruits.sort();
// fruits.reverse()
// console.log(fruits)
//  fruits.


// fruits.forEach((value,index,array) =>console.log(array,index,value))




const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    
  };
  account1.username =account1.owner.split(" ").map(name=>name[0]).join("").toLowerCase();
//   console.log(account1.owner.split(" ").map(name=>name[0]).join("").toLowerCase());
  console.log(account1);
   