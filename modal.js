const clickBtn = document.getElementById("clickBtn")
const modal = document.getElementsByClassName('modal')[0]
const closeBtn = document.getElementsByClassName('closeBtn')[0]
const main = document.getElementsByClassName('main')[0]

clickBtn.addEventListener('click', handleClick)
closeBtn.addEventListener('click', handleClose)

function handleClick(evt) {
    modal.style.display = "none"
    main.classList.add("spinner");
    
    setTimeout(() => {
        main.classList.remove("spinner");
        modal.style.display = "block"
    }, 3000);

}

function handleClose(evt) {
    modal.style.display = "none"
}