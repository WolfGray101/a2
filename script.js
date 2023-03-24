const background = {
  avia: {
    title: 'Авиаперевозки',
    description: 'Доставим ваш груз из любой точки мира',
    img: "./img/A3.png",
    link: "#123",
    width: "75%",
    top: "-2vw",
  },
  avto: {
    title: 'Международная логистика и грузоперевозки',
    description: 'Доставим ваш груз из любой точки мира',
    img: "img/A4-r.png",
    link: "#321",
    width: "60%",
    top: "4vw",
  },
  sea: {
    title: 'Морские перевозки',
    description: 'Доставим ваш груз из любой точки мира',
    img: "img/A2.png",
    link: "#456",
    width: "65%",
    top: "3vw",
  },
  train: {
    title: 'Железнодорожные перевозки',
    description: 'Доставим ваш груз из любой точки мира',
    img: "img/A6.png",
    link: "#789",
    width: "60%",
    top: "5vw",
  },

  import: {
    title: 'Услуга «Импорт 70»',
    description: 'Доставим ваш груз из любой точки мира',
    img: "img/A10-r.png",
    link: "#987",
    width: "45%",
    top: "2vw",
    right: '4rem'
  },
};

const infoImg = document.querySelector(".info-container__img");
const switcher = document.querySelectorAll("input[type=radio]");
const infoBtn = document.querySelector(".info-btn");
const infoTitle = document.querySelector('.info-header')
const infoDescription = document.querySelector('.info-description')

infoBtn.href = `${background.avto.link}`;
infoImg.src = `./${background.avto.img}`;
infoImg.style.width = `${background.avto.width}`;
infoImg.style.top = `${background.avto.top}`;


for (let el of switcher) {
  el.addEventListener("change", () => {

    const body = background[el.id];
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

// $(".varrad").change(function () {
//   if ($(this).prop("checked"))
//     $(this).next(".variant").children(".vvar").text("Правильный");
//   else $(this).next(".variant").children(".vvar").text("Вариант");
// });
