
// figure how to make the divs into a 16 x 16 grid. one found method is max-width max height, but it feels cheatsies.
function createTable() {
const gridContent = document.querySelector("#eas-content")
// 16 x 16 = 256
// Will need to change loop iterator, and splice with prompt input
// "eas" means "etch-a-sketch"

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("rgb-square")
    gridContent.appendChild(div)
    }

    gridContent.addEventListener("mouseover", (e) => {
        target = e.target
        if (target.classList.contains("rgb-square")) {
        target.setAttribute("style", "background-color: red;")
        } else {
            console.log(`${target.id} Is not intented to colored`)
        }
    })
}
createTable()