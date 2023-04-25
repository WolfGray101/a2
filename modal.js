const phoneNum = `+7 495 152 05 54`
const emailAdres = 'info@a2logistics.ru'
// const viber
const menuList = [
  {
    text: "О нас",
    link: "index.html#about",
  },
  {
    text: "Услуги",
    link: "index.html#service",
  },
  {
    text: "Карьера",
    link: "jobs.html",
  },
  {
    text: "Подрядчикам",
    link: "partner.html",
  },
  {
    text: "Контакты",
    link: "index.html#footer",
  },
];

const menuLinks = [
  {
    link: "about.html",
    text: "О нас",
  },
  {
    link: "#services",
    text: "Услуги",
  },
  {
    link: "jobs.html",
    text: "Карьера",
  },
  {
    link: "partners.html",
    text: "Подрядчикам",
  },
];

const socialLinks = [
  {
    link: "viber://chat?number=%2B375447435518",
    img: "./img/icon/viber.png",
  },
  {
    link: "https://t.me/a2logisticsru",
    img: "./img/icon/telegram.png",
  },
  {
    link: "https://wa.me/79686113177",
    img: "./img/icon/whatsapp.png",
  },
];

const headerContainer = document.querySelector(".header-container");

const header = document.createElement("header");
header.classList.add("navigate");

const menuGroup = document.createElement("div");
menuGroup.classList.add("menu-group");

const contactsGroup = document.createElement("div");
contactsGroup.classList.add("contacts-group");

const contactsSocial = document.createElement("div");
const contactsPhone = document.createElement("div");

contactsSocial.classList.add("contacts-group__items");
contactsPhone.classList.add("contacts-group__items");

contactsGroup.append(contactsSocial);

const mailLink = document.createElement("a");
mailLink.classList.add("contacts-group__item");
mailLink.classList.add("contacts-group__item--mail");
mailLink.href = `mailto:${emailAdres}`;
mailLink.textContent = emailAdres;

contactsSocial.append(mailLink);

const socialGroupLinks = document.createElement("div");
socialGroupLinks.classList.add("contacts-group__social");

contactsSocial.append(socialGroupLinks);

for (let el of socialLinks) {
  const a = document.createElement("a");
  a.classList.add("contact-group__social-item");
  a.href = el.link;
  const aImg = document.createElement("img");
  aImg.src = el.img;
  a.append(aImg);
  socialGroupLinks.append(a);
}

contactsGroup.append(contactsPhone);

const aPhone = document.createElement("a");
aPhone.classList.add("contacts-group__item");
aPhone.classList.add("contacts-group__item--phone");
aPhone.href = `tel:${phoneNum}`;
aPhone.textContent = phoneNum;

const contactBtnHeader = document.createElement("a");
contactBtnHeader.href = "#footer";
contactBtnHeader.classList.add("btn");
contactBtnHeader.classList.add("contact-btn");
contactBtnHeader.textContent = "Оставить заявку";

contactsPhone.append(aPhone);
contactsPhone.append(contactBtnHeader);

const burgerBtn = document.createElement("div");
burgerBtn.classList.add("burger-menu");
for (let i = 0; i < 3; i++) {
  const burgerBtnItem = document.createElement("div");
  burgerBtnItem.classList.add("burger-item");
  burgerBtn.append(burgerBtnItem);
}

const logo = document.createElement("a");
logo.classList.add("menu-group__logo");

const logoImg = document.createElement("img");
logo.href = "index.html";
logoImg.src = "./img/EN.png";
logo.append(logoImg);

headerContainer.appendChild(header);

header.append(menuGroup);
header.append(contactsGroup);
header.append(burgerBtn);

menuGroup.append(logo);

for (let el of menuLinks) {
  const menuLink = document.createElement("a");
  menuLink.classList.add("btn");
  menuLink.src = el.link;
  menuLink.textContent = el.text;
  menuGroup.append(menuLink);
}

burgerBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  headerContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modalHeader = document.createElement("div");
  const modalItems = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalItems.classList.add("modal-items");
  console.log(modalContainer);
  modalContainer.append(modalHeader);
  modalContainer.append(modalItems);
  const modalLogo = document.createElement("div");
  modalLogo.classList.add("modal-logo");
  const modalClose = document.createElement("div");
  modalClose.classList.add("modal-close");
  modalClose.textContent = "+";
  modalHeader.appendChild(modalLogo);
  modalHeader.appendChild(modalClose);
  document.body.append(modalContainer);
  for (let el of menuList) {
    const modalItem = document.createElement("div");
    modalItem.classList.add("modal-item");
    modalItem.textContent = el.text;
    modalItem.addEventListener("click", () => (location.href = el.link));
    modalItems.append(modalItem);
  }

  const closeModal = document.querySelector(".modal-close");

  closeModal.addEventListener("click", () => {
    document.body.style.overflow = "";
    document.body.style.backgroundColor = "";

    document.querySelector(".modal-container").remove();
  });
});
