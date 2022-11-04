const btn = document.querySelector("#toggle-btn")
const addBtn = document.querySelector("#add-btn")
const closeBtn = document.querySelector("#close-btn")
const articlesSection = document.querySelector(".articles")
const formDOM = document.querySelector(".form")

btn.addEventListener('click', () => document.querySelector("body").classList.toggle("dark-theme"))
addBtn.addEventListener('click', () => document.querySelector(".modal-overlay").classList.add("open-modal"))
closeBtn.addEventListener("click", () => document.querySelector(".modal-overlay").classList.remove("open-modal"))

const articlesData = JSON.parse(localStorage.getItem("articles"))
const showArticles = () => {
  if(!articlesData || articlesData.length === 0) {
    articlesData = `
      <article class="post">
        <h2>No Post Found</h2>
      </article>
    `
  return articlesSection.innerHTML = articlesData
  }
  
  const article = articlesData
    .map((article) => {
      const { id, title, date, length, snippet } = article
      const formatDate = moment(date).format('MMMM Do, YYYY')
      return `
        <article class="post">
          <h2>${ id }. ${ title }</h2>
          <div class="post-info">
            <span>${ formatDate }</span>
            <span>${ length } min read</span>
          </div>
          <p>
            ${ snippet }
          </p>
        </article>
      `
    })
    .join('');
    
    articlesSection.innerHTML = article
  }

const addArticle = () => {
  let title = document.querySelector("#title").value
  let dateDOM = document.querySelector("#date").value.split("-")
  const [ y, m, d ] = dateDOM
  const date = new Date(y, (m - 1), d)
  let length = document.querySelector("#time").value
  let snippet = document.querySelector("#content").value

  const data = { id: articlesData.length + 1, title, date, length, snippet }

  articlesData.push(data)

  localStorage.setItem("articles", JSON.stringify(articlesData))
  formDOM.reset()
}

formDOM.addEventListener("submit", (e) => {
  e.preventDefault()

  addArticle()
  document.querySelector(".modal-overlay").classList.remove("open-modal")
  showArticles()
})

showArticles()