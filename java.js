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

// had some trouble with this as i was initially using 'i' as my 
// value in this area 'grid.style.width= 600 / userSelection + 'px';'
// however this causes 'i' to change based on iteration thereby
//setting off false width or other variables, i realized this
//quickly but at one point thought i was wrong due to analyzing
//the situation incorrectly, should have added a console.log to check
//the value sooner. goign to test a flex basis solution now.
// flex basis solution works just fine, i learned more about
//how to use the ${} as well, didnt realize you could include more
// things in there besides a single value, very useful.
// will be keeping this solution as it should work even if the 
//dimensions of the box are altered.

function createDivs () {
    if (userSelection <= 100) {
        for (let i = userSelection; i > 0; i--){
    for (let i = userSelection; i > 0 ; i--){
        let px = 'px'
        const grid = document.createElement('div');
        grid.classList.add("grid");
        grid.textContent = `${i}/` ;
        grid.style.flex= `1 0 ${100/userSelection}%`;
        gridContainer.appendChild(grid);
    }
    
}
}
}
