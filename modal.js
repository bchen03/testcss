const clickBtn = document.getElementById("clickBtn")
const modal = document.getElementsByClassName('modal')[0]
const closeBtn = document.getElementsByClassName('closeBtn')[0]

clickBtn.addEventListener('click', handleClick)
closeBtn.addEventListener('click', handleClose)

function handleClick(evt) {
    modal.style.display = "block"
}

function handleClose(evt) {
    modal.style.display = "none"
}