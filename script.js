
//Function will populate the website in a 960px width area
//with as many rectangles put in (up to a max of 100 grids)
//input: number
//no outputs
function addGrids(number){

    //grab the container
    const grid = document.querySelector(".container");
 

    //for as many times as the number, append a new grid with a 
    //default css class
    for(let i = 0; i < number; i++){
        let gridAddition = document.createElement("div");
        gridAddition.classList.add("default");
        grid.append(gridAddition);
        console.log("hi");
    }
}

addGrids(16);