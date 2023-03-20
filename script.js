const background = {
  plane: "./img/plain.png",
  car: "img/carr.png",
  ship: "img/ship.png",
  track: "img/track.png",
  train: "img/train.png",
};

const info = document.querySelector(".info-container");
info.style.backgroundImage = `url(${background.plane})`;
// for (let el in background) {
//   setInterval(() => {
//     console.log(background[el]);
//     info.style.background =`url(${background[el]})`
//   }, 1500);
// }
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
