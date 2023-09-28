// let a = ["q", "w", "e" , "r", "t" , "y", "u" , "i", "o", "p","a", "s", "d","f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

// console.log(a)

// console.log(a[25] + a[7] + a[3]+a[10] + a[19] + a[10] + a[25])#n4

let a = [ 
    {name: "Bekzod", age: 15, familiya: "mansurjonov"}, 
    {name: "Kamron", age: 17, familiya: "Boburov"}, 
    {name: "Farik", age: 14, familiya: "mansurjonov"}, 
    {name: "Oybek", age: 13, familiya: "mansurjonov"}, 
    {name: "Mubina", age: 12, familiya: "mansurjonov"}, 
    {name: "Abzal", age: 15, familiya: "mansurjonov"}, 
    {name: "SHaxina", age: 17, familiya: "mansurjonov"}, 
    {name: "Madina", age: 20, familiya: "mansurjonov"} 
 
] 
 
let c = prompt("ism yoz") 
 
const b = a.filter(element => element.age > c) 
console.log(b)