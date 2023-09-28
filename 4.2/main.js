let img = document.querySelector('#imgCarousel')

let arrayImages = [
   "https://www.forumdaily.com/wp-content/uploads/2020/07/shutterstock_1062332993.jpg",
   "https://static9.tgstat.ru/channels/_0/1a/1ad8389d34a7df09a097624cbda77edf.jpg",
   "https://uzreport.news/fotobank/image/84d5dad90ff747d95bac22a9fd3dc5e2.jpeg",
   "https://i0.wp.com/bm.img.com.ua/berlin/storage/600x500/f/88/f8031c837e5724e520e9a596e9b5888f.jpg",
]

let score = 0

img.attributes[0].value = arrayImages[score]

next.attributes("click", () =>{
   if (score < 3 ) {
      score = score + 1
      img.attributes[0].value = arrayImages
      console.log(score)

   } else{
      score =0
   }
})

back.addEventListener("click", () =>{

   if (score >  0) {
      score = score - 1
      img.attributes[0].value = arrayImages[score]
      console.log(score)

   
   } else{
      score = 3
      console.log(score)
      img.attributes[0].value = arrayImages[score]
   }
})


