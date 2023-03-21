const background = {
  avia: {
    img:"./img/A3.png",
    link: '#123'
  },
  avto: {
    img:"img/A2.png",
    link: '#321'
  },
  sea: {
  img: "img/A10.png",
  link: '#456'
},
  train: {
    img:"img/A4.png",
  link: '#789'
},

  import: {
    img:"img/A6.png",
  link: '#987'
}
};

const info = document.querySelector(".info-container");
const switcher = document.querySelectorAll("input[type=radio]");
const infoBtn = document.querySelector('.info-btn')

info.style.backgroundImage = `url(${background.avia.img})`;
infoBtn.href =`${background.avia.link}`


for (let el of switcher) {
  el.addEventListener('change', ()=> {
info.style.backgroundImage = `url(${background[el.id].img})`;
infoBtn.href =`${background[el.id].link}`

  })
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

$('.varrad').change(function(){
  if($(this).prop('checked')) $(this).next('.variant').children('.vvar').text('Правильный');
  else $(this).next('.variant').children('.vvar').text('Вариант');
});
