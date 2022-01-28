const container = document.querySelector(".container")
const index = document.querySelector("#index")

container.addEventListener("wheel", e=>{
    e.preventDefault()
    container.scrollLeft += (e.deltaY/2.4)
    index.style.width = (container.scrollLeft/2)+"px"
})