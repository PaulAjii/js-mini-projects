const btn = document.querySelector(".btn")
const colorValue = document.querySelector(".color-value")
const container = document.querySelector(".container")

const colors = ["green", "blue", "red", "#f3f4d2", "aliceblue", "whitesmoke"]
// Other Colors can be added but adjustments need to bee added to the code

const getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber()

    colorValue.textContent = colors[randomNumber]
    container.style.backgroundColor = colors[randomNumber]

    if(randomNumber === 0 || randomNumber === 1 || randomNumber === 2) {
        container.style.color = "#fff"
        btn.style.color = "#fff"
    } else {
        container.style.color = "#555"
        btn.style.color = "#555"
    }
})
