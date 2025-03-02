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

    let gridContentStyles = getComputedStyle(gridContent)
    let gcMaxWidthVal = gridContentStyles.getPropertyValue("max-width")
    let gcParsedWidth = parseInt(gcMaxWidthVal, 10)

        function dynamoGrid(size) {
            squareSize = gcParsedWidth / size
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
 

    const resetBtn = document.querySelector(".g-reset")

        resetBtn.addEventListener("click", () => {
             rgbDivList.forEach((e) => {
                e.setAttribute("style", "background-color: white;")
             })
        })


        gSizeRange.addEventListener("input", (e) => {
            let gridSize = e.target.value
            gridSizeP.textContent = gridSize
            rgbDivList.forEach((e) => {
                e.remove()
            })
            dynamoGrid(gridSize)
        })

        let isLeftMouseDown = false

        gridContent.addEventListener("mousedown", (e) => {
            if (e.button === 0) {
                isLeftMouseDown = true
            }
        })

        gridContent.addEventListener("mouseup", (e) => {
            if (e.button === 0) {
                isLeftMouseDown = false
            }
        })

        gridContent.addEventListener("mousemove", (e) => {
            if (isLeftMouseDown) {
                changeRgbDiv(e)
            }
        })

        function changeRgbDiv(e) {
            target = e.target
            if (target.classList.contains("rgb-square")) {
                target.setAttribute("style", "background-color: violet;")
            } else {
                console.log(`${target.id} Is not intented to change`)
            }
        }

        dynamoGrid(16)

