const burger = document.querySelector('.burger-menu')

const menuList = [

{
  text:  'О нас',
  link: 'index.html#about',
},
{
  text:  'Услуги',
  link: 'index.html#service',
},
{
  text:  'Карьера',
  link: 'jobs.html'
},
{
  text:  'Подрядчикам',
  link: 'partner.html',
},
{
  text:  'Контакты',
  link: 'index.html#footer',
}
]
burger.addEventListener('click', () => {

  document.body.style.overflow = 'hidden'

  const modalContainer = document.createElement('div')
  modalContainer.classList.add('modal-container')
  const modalHeader = document.createElement('div')
  const modalItems = document.createElement('div')
  modalHeader.classList.add('modal-header')
  modalItems.classList.add('modal-items')
  console.log(modalContainer);
  modalContainer.append(modalHeader)
  modalContainer.append(modalItems)
  const modalLogo = document.createElement('div')
  modalLogo.classList.add('modal-logo')
  const modalClose = document.createElement('div')
  modalClose.classList.add('modal-close')
  modalClose.textContent = '+'
  modalHeader.appendChild(modalLogo)
  modalHeader.appendChild(modalClose)
  document.body.append(modalContainer)
  for (let el of menuList) {
    const modalItem = document.createElement('div')
    modalItem.classList.add('modal-item')
    modalItem.textContent = el.text
    modalItem.addEventListener('click', () => location.href=el.link)
    modalItems.append(modalItem)
  }

  const closeModal = document.querySelector('.modal-close')

  closeModal.addEventListener('click', () => {
    document.body.style.overflow = ''
    console.log('click');
    document.querySelector('.modal-container').remove()
  })
})


