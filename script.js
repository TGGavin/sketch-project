// "eas" means "etch-a-sketch"

function etchASketch() {

const gridContent = document.querySelector("#eas-content")
// 16 x 16 = 256 + 1 for the div that pushes everything


for (let i = 0; i < 257; i++) {
    const div = document.createElement("div")
    div.classList.add("rgb-square")
    gridContent.appendChild(div)
    }

    // to do: change this function from mouseover to some sort of hold click
    gridContent.addEventListener("mouseover", (e) => {
        target = e.target
        if (target.classList.contains("rgb-square")) {
        target.setAttribute("style", "background-color: red;")
        } else {
            console.log(`${target.id} Is not intented to colored`)
        }
    })
    const resetBtn = document.querySelector(".g-reset")
    const rgbSquareNL = document.querySelectorAll(".rgb-square")

        resetBtn.addEventListener("click", () => {
             rgbSquareNL.forEach((element) => {
                element.setAttribute("style", "background-color: white; ")
             })
        })
    }
    
    etchASketch()

    //  TO DO: Make hold click custom event. Put hold click event handler for grid of rgb squares.
    //  Make getRandomColor function
    //  Make Opacity decrease 10% every pass
    //  Move all rgb square, related styles into js
    //  Make Grid size changeable via input
    // THE BIG CAJUNA: Make it so the values change dynamically when changing grid size

    //LATER!
    // function nxn(num) {
    //     num * num
    //     return
    // }
    // const gridSizeSlider = document.querySelector(".slider")
// const sliderValuePara = document.querySelector(".slider-value-p")
// const gridSize = gridSizeSlider.value
// sliderValuePara.textContent = `${gridSize}`