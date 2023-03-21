const background = {
  avia: {
    img:"./img/A3.png",
    link: ''
  },
  avto: {
    img:"img/A2.png",
    link: ''
  },
  sea: {
  img: "img/A10.png",
  link: ''
},
  train: {
    img:"img/A4.png",
  link: ''
},

  import: {
    img:"img/A6.png",
  link: ''
}
};

const info = document.querySelector(".info-container");
info.style.backgroundImage = `url(${background.avia.img})`;
const switcher = document.querySelectorAll("input[type=radio]");

for (let el of switcher) {
  el.addEventListener('change', ()=> {
    console.log(background[el.id].img);
info.style.backgroundImage = `url(${background[el.id].img})`;

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
