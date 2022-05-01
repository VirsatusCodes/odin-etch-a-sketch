const gridContainer = document.querySelector('#gridContainer');
const grid = document.createElement('div');
grid.classList.add('grid');
grid.textContent= " test";
gridContainer.appendChild(grid);

const grid1 = document.createElement('div');
grid1.classList.add('grid');
grid1.textContent= " test";
gridContainer.appendChild(grid1);

const userPrompt = document.querySelector('#userPrompt');
userPrompt.addEventListener('click', () => {
    getUserSelection();
    removeDivs();
    createDivs();
});

//you cant normally create multiple divs like this, however
//i guess because of interactions with scope if its in a function
// you can create  new div's using the same variable, OR you can 
//do the initial declaration using "let" instead of "const" and you
//can continue to create without using a function.

function getUserSelection() {
    userSelection = prompt("test");
}

function removeDivs() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function createDivs () {
    if (userSelection <= 100) {
    for (let i = userSelection; i > 0 ; i--){
        const grid = document.createElement('div');
        grid.classList.add("grid");
        grid.textContent = `${i}/` ;
        gridContainer.appendChild(grid);   
    }
}
}
