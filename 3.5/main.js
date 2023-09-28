let pol = prompt("jinsingizni yozing")
let weight = prompt("vazningizni yozing")
let height = prompt("boyingizni yozing")

if (pol.toLowerCase() === 'qiz bola') {
    if (weight <= 49 && height <= 155 ) {
        alert('siz tanangizga qaraganda ozginsiz')
    }

    if (weight <= 56 && height <= 155 && weight >= 50) {
        alert('siz tanangizga qaraganda ortacha siz')
    }

    if (weight <= 62 && height <= 155 && weight >= 57) {
        alert('siz tanangizga qaraganda semiz siz')
    }

    if (weight <= 49 && height <= 160 && weight >= 63) {
        alert('siz tanangizga qaraganda ozginsiz')
    }

    if (weight <= 55 && height <= 160 && weight >= 50) {
        alert('siz tanangizga qaraganda ortacha siz')
    }

    if (weight <= 62 && height <= 160 && weight >= 49) {
        alert('siz tanangizga qaraganda semiz siz')
    }

    if (weight <= 52 && height <= 165 && weight >= 63) {
        alert('siz tanangizga qaraganda ozginsiz')
    }

    if (weight <= 58.5 && height <= 165 && weight >= 49) {
        alert('siz tanangizga qaraganda ortacha siz')
    }

    if (weight <= 65 && height <= 165 && weight >= 59.6) {
        alert('siz tanangizga qaraganda semiz siz')
    }
}