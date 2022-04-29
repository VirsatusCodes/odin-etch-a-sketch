const gridContainer = document.querySelector('#gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid');
grid.textContent= " test";
gridContainer.appendChild(grid);

const userPrompt = document.querySelector('#userPrompt');
userPrompt.addEventListener('click', () => {
    createDivs()
});

//use a button to  throw up the prompt for grid size
function createDivs () {
    gridContainer.removeChild(grid);
    userSelection =prompt("test");
    console.log(userSelection)
    for (let i = userSelection; i > 0 ; i--){
        const grid = document.createElement('div');
        grid.classList.add("grid");
        grid.textContent = `${i} /` ;
        gridContainer.appendChild(grid);   
    }
 
}