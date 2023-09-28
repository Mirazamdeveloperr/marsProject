let sana = new Date();

let body = document.querySelector('body')
let p = document.querySelector('p')
let b = sana.getMonth() + 1;
let span = document.querySelector('span')
// console.log(sana.getDate() + "." + b + "." + sana.getFullYear());

// sana.setFullYear(2010)
// sana.setMonth(4)
// sana.setDate(10)

// console.log(sana)

body.style.background = 'darkblue'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.alignItems = 'center'
body.style.height = '100vh'
body.style.color = 'white'
body.style.fontSize = '48px'
body.style.fontWeight = '700'


body.style.flexDirection = 'column'
sana.setMonth(9)
p.textContent = sana.getDate() + "." + b + "." + sana.getFullYear()

const alarm =  () => {
    const date = new Date()
    span.textContent = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}

setInterval(() => alarm(), 1000)
