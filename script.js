// const backgroundd = {
//   avia: {
//     title: 'Авиаперевозки',
//     description: 'Доставим груз из любой точки мира',
//     img: "./img/A3.png",
//     link: "#123",
//     width: "75%",
//     top: "-2vw",
//   },
//   avto: {
//     title: 'Автомобильные перевозки',
//     description: 'Доставим груз из любой точки мира',
//     img: "img/A4-r.png",
//     link: "#321",
//     width: "55%",
//     top: "4vw",
//   },
//   sea: {
//     title: 'Морские перевозки',
//     description: 'Доставим груз из любой точки мира',
//     img: "img/A2.png",
//     link: "#456",
//     width: "65%",
//     top: "3vw",
//   },
//   train: {
//     title: 'Железнодорожные перевозки',
//     description: 'Доставим груз из любой точки мира',
//     img: "img/A6.png",
//     link: "#789",
//     width: "55%",
//     top: "5vw",
//   },

//   import: {
//     title: 'Услуга «Импорт 70»',
//     description: 'Оформим  груз из любой точки мира',
//     img: "img/A10-r.png",
//     link: "#987",
//     width: "45%",
//     top: "2vw",
//     right: '4rem'
//   },
// };

const infoImg = document.querySelector(".info-container__img");
const switcher = document.querySelectorAll("input[type=radio]");
const infoBtn = document.querySelector(".info-btn");
const infoTitle = document.querySelector('.info-header')
const infoDescription = document.querySelector('.info-description')
const modal = document.querySelector('.modal-auto')
const auto = document.querySelector('.services-container__card--international__open-modal')
const close = document.querySelector('.close')

infoBtn.href = `${backgroundd.import.link}`;
infoImg.src = `./${backgroundd.import.img}`;
infoImg.style.width = `${backgroundd.import.width}`;
infoImg.style.top = `${backgroundd.import.top}`;
infoTitle.textContent=`${backgroundd.import.title}`
infoDescription.textContent=`${backgroundd.import.description}`

//   auto.addEventListener('click', () => {
//     modal.classList.add('modal-auto__open')
//     document.body.classList.add('body-fixed')  
//     document.querySelector('.modal-auto__container').style.display='flex'
//   })



// close.addEventListener('click', () => {
//     document.body.classList.remove('body-fixed')  
//   modal.classList.remove('modal-auto__open')
//   document.querySelector('.modal-auto__container').style.display='none'

// })

for (let el of switcher) {
  el.addEventListener("change", () => {

    const body = backgroundd[el.id];
    infoImg.src = `./${body.img}`;
    infoImg.style.width = `${body.width}`;
    infoImg.style.top = `${body.top}`;
    infoBtn.href = `${body.link}`;
    console.log(body.right);
    body.right? 
    infoImg.style.right = `${body.right}`:
    infoImg.style.right = 0;
    infoTitle.textContent=`${body.title}`
    infoDescription.textContent=`${body.description}`
  });
}

const menuBtn = document.querySelectorAll(".btn");
menuBtn[1].classList.add("checked");
for (let el of menuBtn) {
  el.addEventListener("click", () => {
    !el.classList.entries("checked")
      ? menuBtn.forEach((element) => {
          element.classList.remove("checked");
        })
      : null;
  });
}
