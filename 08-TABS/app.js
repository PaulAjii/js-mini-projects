const about = document.querySelector('.about')
const tabBtns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id

  if(id) {
    tabBtns.forEach((btn) => btn.classList.remove('active'))

    e.target.classList.add('active')

    contents.forEach((content) => content.classList.remove('active'))
    
    const el = document.getElementById(id)
    el.classList.add('active')
  }
})