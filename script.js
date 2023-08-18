const body = document.querySelector("body")
const box = document.querySelectorAll(".box")
let text = document.getElementById("text")

box.forEach((e)=>{

e.addEventListener("click",()=>{


    body.style.backgroundColor = e.style.backgroundColor
    body.style.transition = "0.5s ease-in-out"
    setTimeout(()=>{
        text.innerText = e.id

    },500)

})
})
