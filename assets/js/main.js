let counterDisplayElem = document.querySelector('.counter-display')
let counterMinusElem = document.querySelector('.counter-minus')
let counterMinusElem10 = document.querySelector('.counter-minus10')
let counterMinusElem100 = document.querySelector('.counter-minus100')
let counterPlusElem = document.querySelector('.counter-plus')
let counterPlusElem10 = document.querySelector('.counter-plus10')
let counterPlusElem100 = document.querySelector('.counter-plus100')
let counterMalElem = document.querySelector('.counter-mal')
let counterResetElem = document.querySelector('.counter-reset')
let count = 0;
updateDisplay()
counterPlusElem.addEventListener("click", () => {
    count++;
    updateDisplay()
})
counterMinusElem.addEventListener("click", () => {
    count--;
    updateDisplay()
})
counterPlusElem10.addEventListener("click", () => {
    count += 10;
    updateDisplay()
})
counterMinusElem10.addEventListener("click", () => {
    count -= 10;
    updateDisplay()
})
counterPlusElem100.addEventListener("click", () => {
    count += 100;
    updateDisplay()
})
counterMinusElem100.addEventListener("click", () => {
    count -= 100;
    updateDisplay()
})
counterMalElem.addEventListener("click", () => {
    count *= 2;
    updateDisplay()
})
counterResetElem.addEventListener("click", () => {
    count = 0;
    updateDisplay()
})
function updateDisplay() {
    counterDisplayElem.innerHTML = count;
}