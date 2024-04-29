const newGame = document.querySelector('#btn')
const randomColor1 = document.querySelector('#div1_1')
const randomColor2 = document.querySelector('#div1_2')
const randomColor3 = document.querySelector('#div1_3')
const randomColor4 = document.querySelector('#div1_4')
const randomColor5 = document.querySelector('#div1_5')
const randomColor6 = document.querySelector('#div1_6')
const colors = ["red", "blue", "green", "black", "yellow", "orange", "purple", "pink", "magenta", "brown", "gray", "aqua"]

function clickRandomColor1() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor1.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor1)


function clickRandomColor2() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor2.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor2)

function clickRandomColor3() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor3.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor3)

function clickRandomColor4() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor4.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor4)

function clickRandomColor5() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor5.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor5)

function clickRandomColor6() {
    let index = Math.floor(Math.random() * colors.length)    
let color = colors[index]
randomColor6.style.backgroundColor = color
}
newGame.addEventListener('click', clickRandomColor6)






























