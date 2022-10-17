const value = document.querySelector(".value")
const btns = document.querySelectorAll(".btn")

let count = 0

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = e.currentTarget.id
        switch(id) {
            case "increase":
                count++
                break
            case "reset":
                count = 0
                break
            case "decrease":
                count--
                break
            default:
                count = 0
        }
        value.innerText = count
    })
})