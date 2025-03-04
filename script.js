    // "eas" means "etch-a-sketch"
    // "gSI" = gridSizeInput
    // I can't quite put my finger on what to do, in order to, fix the stupid.

    //  TO DO: DONE! Make hold click custom event. Put hold click event handler for grid of rgb squares.
    //  Make getRandomColor function
    //  Make Opacity increase 10% every pass
    //  DONE! Make reset button work. 
    //  DONE! Make Grid size changeable via input/prompt. 
    //  DONE! THE BIG CAJUNA: Make it so the values change dynamically when changing grid size. 
    //  Make it so when changing size of grid it does not lag
    //  When done make sure to comment everything. but not too much

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
            nodeListDel(rgbDivList)
            dynamoGrid(gridSize)
        })

        function nodeListDel(nlToDelete) {
            nlToDelete.forEach((e) => {
                e.remove()
            })
        }

        let isLeftMouseDown = false

        gridContent.addEventListener("mousedown", (e) => {
            e.preventDefault()
            if (e.button === 0) {
                isLeftMouseDown = true
                changeRgbDiv(e, isRandomColorOn)
            }
        })

        document.addEventListener("mouseup", (e) => {
            if (e.button === 0) {
                isLeftMouseDown = false
                changeRgbDiv(e, isRandomColorOn)
            }
        })

        document.addEventListener("mouseover", (e) => {
            if (isLeftMouseDown) {
                changeRgbDiv(e, isRandomColorOn)
         }
        })

        isRandomColorOn = false

        const rngColorBtn = document.querySelector(".btn-rng-color")
        rngColorBtn.addEventListener("click", (e) => {
            isRandomColorOn = !isRandomColorOn
            btnClicked(e, isRandomColorOn)
        })

        const rngIsOnP = document.querySelector(".rng-color-p")
        
        function btnClicked(e, boolean) {
        //  had to enable !important on css psuedo state :hover property in order to change color after event fires
            target = e.target
            if (typeof boolean === "boolean") {
                if (boolean) {
                    target.setAttribute("style", "background-color: grey;")
                    rngIsOnP.textContent = "On!"
                } else {
                    target.setAttribute("style", "background-color: white")
                    rngIsOnP.textContent = "Off!"
                }
                
            }

        }

        const colorInput = document.querySelector(".color-input")
        function getChosenColor() {
            return colorInput.value
        }

        function getRandomColor() {
            
            let randoRed = Math.ceil(Math.random() * 255)
            let randoGreen = Math.ceil(Math.random() * 255)
            let randoBlue = Math.ceil(Math.random() * 255)            

            return `rgb(${randoRed}, ${randoGreen}, ${randoBlue});`
        }

        function changeRgbDiv(e, boolean) {
            const rngColor = getRandomColor()
            const userColor = getChosenColor()
            target = e.target
            if (typeof boolean === "boolean") {
                if (target.classList.contains("rgb-square")) {
                    if (boolean) {
                        target.setAttribute("style", `background-color: ${rngColor}`)
                    }   else if (!boolean) {
                        target.setAttribute("style", `background-color: ${userColor}`)
                    }       
                }   
            } else {
                console.log(`${boolean} is not a boolean value`)
            }
    }
        dynamoGrid(16)

