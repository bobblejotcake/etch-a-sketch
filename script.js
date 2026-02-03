
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
        


        gridAddition.addEventListener("mouseenter", (e) =>{
        e.preventDefault();
        let randomRed = Math.floor(Math.random() * 355);
        let randomBlue = Math.floor(Math.random() * 355);
        let randomGreen = Math.floor(Math.random() * 355);
        e.target.style.backgroundColor = `rgba(${randomRed},
        ${randomGreen},${randomBlue},1)`;
        })
        grid.append(gridAddition);
    }
}

addGrids(100);


function changeOpacity(currentOpacity){

}


const button  = document.querySelector("button");
button.addEventListener("click", (e) => {
    e.preventDefault;
    console.log(e.target);
    let ans = parseInt(prompt("How many boxes do you want?"));
    if (ans == NaN || ans < 0 || ans > 100){
        console.log("Please input a valid number from 0-100");
        return;
    }

    //Delete all boxes
    clearBoxes();

    //spawn in new one
    addGrids(ans);
})


function clearBoxes(){
    const grid = document.querySelector(".container");
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }
}
