const phoneNum = `+7 495 152 05 54`
const emailAdres = 'info@a2logistics.ru'
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
    link: "partners.html",
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
    id: 'about'
  },
  {
    link: "index.html#services",
    text: "Услуги",
    id: 'service'

  },
  {
    link: "jobs.html",
    text: "Карьера",
    id: 'job'

  },
  {
    link: "partners.html",
    text: "Подрядчикам",
    id: 'partner'

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
  menuLink.href = el.link;
  menuLink.textContent = el.text;
  menuLink.id = el.id
  menuGroup.append(menuLink);
}

// footer

const footer = document.querySelector('.footer')
const footerHeaders = document.createElement('div')
const footerItems = document.createElement('div')
footerHeaders.classList.add('footer-headers')
footerItems.classList.add('footer-items')
footer.append(footerHeaders)
footer.append(footerItems)
const footerLogo = document.createElement('div')
footerLogo.classList.add('footer-headers__logo')
footerHeaders.append(footerLogo)
const footerHeaderH2 =  document.createElement('h2')
footerHeaderH2.classList.add('footer-headers__form-header')
footerHeaderH2.textContent = 'Оставьте ваши контакты и мы с вами свяжемся'
footerHeaders.append(footerHeaderH2)

const footerMap  = document.createElement('div')
footerMap.classList.add('footer-item')
for (let el of menuLinks) {
  const menuLink = document.createElement("a");
  menuLink.classList.add("footer-item__map");
  menuLink.href = el.link;
  menuLink.textContent = el.text;
  footerMap.append(menuLink);
}
footerItems.append(footerMap)

const contactsBlock = document.createElement('div')
contactsBlock.classList.add('footer-item')
const contactHeader = document.createElement('h3')
contactHeader.classList.add('footer-item__header')
contactHeader.textContent = 'Контакты'
const footerLogoSm =  document.createElement('div')
footerLogoSm.classList.add('footer-headers__logo')
footerLogoSm.classList.add('footer-headers__logo--sm')
contactsBlock.append(footerLogoSm)
contactsBlock.append(contactHeader)
const aFooterPhone = document.createElement('a')
aFooterPhone.classList.add('footer-item__phone')
aFooterPhone.href = `tel:${phoneNum}`
aFooterPhone.textContent = phoneNum
contactsBlock.append(aFooterPhone)
const aFooterMail = document.createElement('a')
aFooterMail.classList.add('footer-item__email')
aFooterMail.href = `mailto:${emailAdres}`
aFooterMail.textContent = emailAdres
contactsBlock.append(aFooterMail)

footerItems.append(contactsBlock)

//footer-form
const footerForm = document.createElement('form')
footerForm.classList.add('rd-mailform')
footerForm.classList.add('footer-item__form')
footerForm.method = 'post'
footerForm.action = 'send.php'
footerItems.append(footerForm)

const nameLabel = document.createElement('label')
const phoneLabel = document.createElement('label')
const emailLabel = document.createElement('label')
nameLabel.classList.add('form-label')
phoneLabel.classList.add('form-label')
emailLabel.classList.add('form-label')
const nameInput = document.createElement('input')
const phoneInput = document.createElement('input')
const emailInput = document.createElement('input')
nameLabel.append(nameInput)
phoneLabel.append(phoneInput)
emailLabel.append(emailInput)
nameInput.type = 'text'
phoneInput.type = 'text'
emailInput.type = 'text'
nameInput.placeholder = "Имя"
nameInput.name = 'name'
// nameInput.dataset = "@NotEmpty @NumbersOnly"
phoneInput.placeholder = "Номер телефона"
phoneInput.name = 'phone'
emailInput.placeholder = "E-mail"
emailInput.name = 'email'

const privacyCheckboxLabel = document.createElement('label')
const privacyCheckboxInput = document.createElement('input')
const privacyCheckboxText = document.createElement('p')
privacyCheckboxLabel.appendChild(privacyCheckboxInput)
privacyCheckboxLabel.appendChild(privacyCheckboxText)
privacyCheckboxLabel.classList.add('form-label__privacy-checkbox')
privacyCheckboxText.textContent = 'Даю согласие на обработку Персональных данных'
privacyCheckboxInput.type = 'checkbox'

const formSubmitBtn = document.createElement('button')
formSubmitBtn.classList.add('button')
formSubmitBtn.classList.add('form-btn')
formSubmitBtn.textContent = 'ОСТАВИТЬ ЗАЯВКУ'

const infoLabel = document.createElement('div')
infoLabel.classList.add('mfInfo')
infoLabel.style.marginBottom = '20%'


footerForm.append(nameLabel)
footerForm.append(phoneLabel)
footerForm.append(emailLabel)
footerForm.append(privacyCheckboxLabel)
footerForm.append(formSubmitBtn)
footerForm.append(infoLabel)

// (function ($) {
//   var o = $(".rd-mailform");
//   if (o.length > 0) {
//     $(document).ready(function () {
//       if (o.length) {
//         o.rdMailForm();
//       }
//     });
//   }
// })(jQuery)

//мобильное меню 
burgerBtn.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
  headerContainer.style.backgroundColor = "rgba(255, 255, 255, 0)";

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modalHeader = document.createElement("div");
  const modalItems = document.createElement("div");
  const modalItemsContacts = document.createElement("div");
  const modalItemsSocialGroup = document.createElement("div");
  modalHeader.classList.add("modal-header");
  modalItems.classList.add("modal-items");
  modalItemsContacts.classList.add("modal-items");
  modalItemsSocialGroup.classList.add("modal-items");
  modalContainer.append(modalHeader);
  modalContainer.append(modalItems);
  modalContainer.append(modalItemsContacts);
  modalContainer.append(modalItemsSocialGroup);
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
  modalItemsContacts.append(aPhone)
  modalItemsContacts.append(mailLink)
  const modalSocialGroupLinks = socialGroupLinks
  modalSocialGroupLinks.classList.add('social-group__modal')
  modalItemsSocialGroup.append(socialGroupLinks)
  const closeModal = document.querySelector(".modal-close");

  closeModal.addEventListener("click", () => {
    document.body.style.overflow = "";
    document.body.style.backgroundColor = "";

    document.querySelector(".modal-container").remove();
  });
});
