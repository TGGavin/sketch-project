    const root = document.querySelector(":root")
    const gridContent = document.querySelector("#eas-content")
    const gSizeRange = document.querySelector("#g-input-range")
    let gridSizeP = document.querySelector(".show-grid-val") 
    
    let gridContentStyles = getComputedStyle(gridContent)
    let gcMaxWidthVal = gridContentStyles.getPropertyValue("max-width")
    let gcParsedWidth = parseInt(gcMaxWidthVal, 10)
    //  functon purpose is to generate the grid in dynamic amounts of divs
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
 
    // resets color and opacity
    const resetBtn = document.querySelector(".g-reset")

        resetBtn.addEventListener("click", () => {
             rgbDivList.forEach((e) => {
                e.setAttribute("style", "background-color: white; opacity: 0")
             })
        })

        // when value changes generates grid, and deletes old grid
        gSizeRange.addEventListener("input", (e) => {
            let gridSize = e.target.value
            gridSizeP.textContent = gridSize
            nodeListDel(rgbDivList)
            dynamoGrid(gridSize)
        })
        // deletes node lists
        function nodeListDel(nlToDelete) {
            nlToDelete.forEach((e) => {
                e.remove()
            })
        }

        //boolean value ascertaining whether or not left mouse is being held
        let isLeftMouseDown = false 

        gridContent.addEventListener("mousedown", (e) => {
            e.preventDefault()
            if (e.button === 0) { //Left Mouse button
                isLeftMouseDown = true
                changeRgbDiv(e, isRandomColorOn)
            }
        })

        document.addEventListener("mouseup", (e) => {
            if (e.button === 0) { // left mouse button
                isLeftMouseDown = false
                changeRgbDiv(e, isRandomColorOn)
            }
        })

        // if left mouse is being held fires a function to change color and, or opacity
        document.addEventListener("mouseover", (e) => {
            if (isLeftMouseDown) {
                changeRgbDiv(e, isRandomColorOn)
         }
        })

        // boolean value, determining if randomly generated colors should be generated
        isRandomColorOn = false

        //btn dedicated to inverting isRandomColorOn val
        const rngColorBtn = document.querySelector(".btn-rng-color")
        rngColorBtn.addEventListener("click", (e) => {
            isRandomColorOn = !isRandomColorOn
            btnClicked(e, isRandomColorOn)
        })

        const rngIsOnP = document.querySelector(".rng-color-p")
        
        // changes css for button, in order to show if the isRandomColorOn true or false
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

            return `rgb(${randoRed}, ${randoGreen}, ${randoBlue})`
        }

        function opacityIncrement(e) {
            target = e.target
            targetStyles = window.getComputedStyle(target)
            val = parseFloat(targetStyles["opacity"])
            return val += 0.10
        }

        // checks if boolean value is true, then checks if correct element, changes color and opacity depending on previous statments
        function changeRgbDiv(e, boolean) {
            target = e.target
            const rngColor = getRandomColor()
            const userColor = getChosenColor()
            const opac = opacityIncrement(e)
            
            if (typeof boolean === "boolean") {
                if (target.classList.contains("rgb-square")) {
                    if (boolean) {
                        target.setAttribute("style", `background-color: ${rngColor}; opacity: ${opac};` )
                    }   else if (!boolean) {
                        target.setAttribute("style", `background-color: ${userColor}; opacity: ${opac};`)
                    }       
                }   
            } else {
                console.log(`${boolean} is not a boolean value`)
            }
    }
    // Primes grid, making everything else viable
        dynamoGrid(16)

