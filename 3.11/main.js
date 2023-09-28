// console.log(window.document.body.style.background = "darkblue")
// console.log(window.document.body.style.color = "White")

// let arr = [ 
//     {id: 1, name: "bekzod", surname: "Mirzaaliyev"}, 
//     {id: 2, name: "Sunat", surname: "Mirzaaliyev"}, 
//     {id: 1, name: "Bahrom", surname: "Mirzaaliyev"}, 
//     {id: 1, name: "Alish", surname: "Mirzaaliyev"}, 
//     {id: 1, name: "Farik", surname: "Mirzaaliyev"}, 
//     {id: 1, name: "Elbek", surname: "Mirzaaliyev"} 
// ] 
 
// let body = document.querySelector("body")

// arr.map( item => {
//     console.log(item)
//     let id = document.createElement("p")
//     id.innerHTML = item.id 
//     body.append(id) 

//     let name = document.createElement('p') 
//     name.innerHTML = item.name 
//     body.append(name) 

//     let surname = document.createElement('p') 
//     surname.innerHTML = item.surname 
//     body.append(surname) 
// })


let body = document.querySelector("body") 
 
let nav = document.createElement("nav") 
 
let database = [ 
    { name: "home" }, 
    { name: "about" }, 
    { name: "contacts" } 
] 
 
database.map(item => { 
    let p = document.createElement("p") 
    p.innerHTML = item.name.toUpperCase() 
    nav.append(p) 
}) 
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.color = "white"
nav.style.background = "darkblue"
nav.style.gap = "50px"
body.append(nav)

let home = document.querySelectorAll("nav p")
home[0].addEventListener("click", ()  => {
    home[0].style.color = "aqua"
    nav.style.backgroundColor = "darkred"
    console.log("Elbek")
})

home[1].addEventListener("click", ()  => {
    home[1].style.color = "blue"
    nav.style.backgroundColor = "darkblue"
})

home[2].addEventListener("click", ()  => {
    home[2].style.color = "green"
    nav.style.backgroundColor = "yellow"
})

let input = document.createElement("input")
body.append(input)
input.addEventListener('input', (event) => {
    nav.style.color = event.target.value

})