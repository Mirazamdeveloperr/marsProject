let body = document.querySelector('body')
let input = document.querySelector('input')
let button = document.querySelector('button')
let list = document.querySelector('ul')

let array = []
function listF() {
    list.innerHTML = "";
  
    array.forEach((item) => {
      let li = document.createElement("li");
  
      li.style.border = "2px solid red";
      li.style.padding = "5px";
      li.style.borderRadius = "10px";
      li.style.margin = "10px 0";
  
      li.innerHTML = item;
  
      list.appendChild(li);
    });
  }
listF()

button.addEventListener('click', (event) => {
    event.preventDefault()

    array.push(input.value)
    listF()
})

body.style.background = "darkviolet";
body.style.height = "100vh";

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";

button.style.background = "yellow";
list.style.width = "400px";
list.style.background = "white";
list.style.borderRadius = "10px";
list.style.listStyle = "none";
list.style.padding

button.style.border = "0"
button.style.borderRadius = "2px"