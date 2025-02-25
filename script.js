    // "eas" means "etch-a-sketch"
    // "gSI" = gridSizeInput

    // function etchASketch() {

    const gridContent = document.querySelector("#eas-content")
    const gSizeNum = document.querySelector("#g-input-num") 
    const gSizeRange = document.querySelector("#g-input-range")
    let gsnVal = gSizeNum.value
    let gsrVal = gSizeRange.value
    gSizeRange.addEventListener("input", (e) => {
        gSizeNum.value = e.target.value
        gridSize = e.target.value
    })

    gSizeNum.addEventListener("input",(e) => {
        gSizeRange.value = e.target.vale
        gridSize = e.target.value
    })



    let gridSize = gSizeNum.value
    let squareSize = 880 / gridSize
    let totalSquares = gridSize * gridSize
        
    for (let i = 0; i < totalSquares; i++) {
        const rgbDiv = document.createElement("div")
        // rgbDiv.style.width = squareSize
        // rgbDiv.style.height = SquareSize
        //Must do the stuff above after every square has rendered and then attach it everysingle one via forEach
        rgbDiv.classList.add("rgb-square")
        gridContent.appendChild(rgbDiv)
    }
    const rgbSquareNL = document.querySelectorAll(".rgb-square")


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
            console.log(`${target.id} Is not intented to changed`)
        }
    })

    const resetBtn = document.querySelector(".g-reset")

        resetBtn.addEventListener("click", () => {
             rgbSquareNL.forEach((e) => {
                e.setAttribute("style", "background-color: white;")
             })
        })

        function delGrid() {
            rgbSquareNL.forEach((e) => {
                e.remove()
            })
        }
    // }
    
    // etchASketch()

            // function updateGridVal(e) {
        //     gridSize = e.target.value
        // }

    //  TO DO: Make hold click custom event. Put hold click event handler for grid of rgb squares.
    //  Make reset button work. DONE!
    //  Make getRandomColor function
    //  Make Opacity increase 10% every pass
    //  Move all rgb square, related styles into js
    //  Make Grid size changeable via input/prompt
    //  THE BIG CAJUNA: Make it so the values change dynamically when changing grid size