const square = document.querySelector("#square")
const para = document.querySelector("#para")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")

let isTextDark = true

input.addEventListener("keyup", (e) => {
    const inputValue = e.target.value
    para.textContent = inputValue.toUpperCase()
    square.style.backgroundColor = inputValue
    
    if(!inputValue) {
        para.textContent = "Empty Color Value"
        para.style.color = "#000"
    }
})

btn.addEventListener("click", () => {
    if(para.textContent === "Empty Color Value") return

    if(para.textContent) {
        isTextDark = !isTextDark

        isTextDark 
        ? 
            para.style.color = "#000"
        :
            para.style.color = "#fff"
    }
})
