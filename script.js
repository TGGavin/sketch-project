    // "eas" means "etch-a-sketch"
    // "gSI" = gridSizeInput
    // I can't quite put my finger on what to do, in order to, fix the stupid.

    //  TO DO: Make hold click custom event. Put hold click event handler for grid of rgb squares.
    //  Make getRandomColor function
    //  Make Opacity increase 10% every pass
    //  DONE! Make reset button work. 
    //  DONE! Make Grid size changeable via input/prompt. 
    //  DONE! THE BIG CAJUNA: Make it so the values change dynamically when changing grid size. 

    const root = document.querySelector(":root")
    const gridContent = document.querySelector("#eas-content")
    const gSizeRange = document.querySelector("#g-input-range")
    let gridSizeP = document.querySelector(".show-grid-val") 

    // let rootStyles = getComputedStyle(root)
    // let rgbSS = rootStyles.getPropertyValue("--rgb-square-size")

    gSizeRange.addEventListener("input", (e) => {
        let gridSize = e.target.value
        gridSizeP.textContent = gridSize
        rgbDivList.forEach((e) => {
            e.remove()
        })
        dynamoGrid(gridSize)
    })

        function dynamoGrid(size) {
            squareSize = 880 / size
            totalSquares = size * size
        for (let i = 0; i < totalSquares; i++) {
            const createRgbDiv = document.createElement("div")
            createRgbDiv.classList.add("rgb-square")
            gridContent.appendChild(createRgbDiv)
        }
        rgbDivList = document.querySelectorAll(".rgb-square") // Here to update nodeList length

        let pxSquareSize = `${squareSize}px`
        root.style.setProperty("--rgb-square-size", pxSquareSize)
    }
    let rgbDivList
    let squareSize
    // to do: change this function from mouseover to some sort of hold click
    // make it so event handler is on rgbDiv not grid content
    gridContent.addEventListener("mouseover", (e) => {
        target = e.target
        if (target.classList.contains("rgb-square")) {
            target.setAttribute("style", "background-color: violet;")
            // const currentOpacity = parseFloat(getComputedStyle(target).opacity);
            // let newOpacity = currentOpacity + 0.1
            // target.style.opacity = newOpacity
        } else {
            console.log(`${target.id} Is not intented to change`)
        }
    })

    const resetBtn = document.querySelector(".g-reset")

        resetBtn.addEventListener("click", () => {
             rgbDivList.forEach((e) => {
                e.setAttribute("style", "background-color: white;")
             })
        })
        dynamoGrid(16)
        