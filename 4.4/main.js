let body = document.querySelector('body') 
let number = 1 
let ukam = `https://jsonplaceholder.typicode.com/users/${number}` 
 
fetch(ukam) 
    .then(data => data.json()) 
    .then(response => { 
        console.log(response) 
        let block = document.createElement('div') 
        let id = document.createElement('p') 
        id.innerHTML = response.id 
        let name = document.createElement('p') 
        name.innerHTML = response.name 
        let email = document.createElement('p') 
        email.innerHTML = response.email
        let address = document.createElement('div') 
        let city = document.createElement('p')
        city.innerHTML = response.address.city

        address.append(city)
        block.append(id. name, email, address)
        body.append(block)
        console.log(id)
    }) 
    .catch(error => console.log(error))
