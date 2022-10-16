const bg = document.querySelector(".bg")
const loadingText = document.querySelector(".loading-text")

let load = 0

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
//function from stackoverflow
// link here: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

const blur = () => {
    load++

    if(load > 99) clearInterval(interval)

    loadingText.innerText = `${load}%`
    loadingText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const interval = setInterval(blur, 30)