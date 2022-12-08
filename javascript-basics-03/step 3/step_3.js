

const colors = document.querySelectorAll(".color")
const p = document.querySelector("p")

colors.forEach((e)=> {
    e.addEventListener("click", ()=> {
        let color = e.getAttribute("class").split(" ")[1]
        p.style = `color: ${color}`;
    })
})