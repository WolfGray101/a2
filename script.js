const background = {
  avia: "./img/A3.png",
  avto: "img/A2.png",
  sea: "img/A10.png",
  track: "img/A4.png",
  import: "img/A6.png",
};

const info = document.querySelector(".info-container");
info.style.backgroundImage = `url(${background.avia})`;
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
