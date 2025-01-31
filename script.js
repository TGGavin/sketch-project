console.log("You should study for your drivers test"); //fuck

// figure how to make the divs into a 16 x 16 grid. one found method is max-width max height, but it feels cheatsies.
function divGridMaker() {
const gridContainer = document.querySelector("#container")

// 16 x 16 = 256
for (let i = 0; i < 256; i++) {
    const div = document.createElement("div")
    div.classList.add("div-block")
    gridContainer.appendChild(div)
    }
}
divGridMaker()
