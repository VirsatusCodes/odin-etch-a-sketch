const userPrompt = document.querySelector('#userPrompt');
userPrompt.addEventListener('click', () => {
    getUserSelection();
    removeDivs();
    createDivs();
});

window.onload = function () {
    userSelection = 16;
    createDivs () ;
}

// opted to use a function event call instead of creating a seperate
//function because atm im not sure how or if its possible to
// in a function call for it using the event target as the target
// with the ease it does here, and its a good notes reference for
//using both examples. and theres nothing inherently wrong with doing it
//like this anyways.

const hover = document.querySelector('#gridContainer');
hover.addEventListener('mouseover', (function (e) {
    e.target.style.background = getColorValues();
}))

function getUserSelection() {
    userSelection = prompt("How large of a grid would you like? (highest input is 100)");
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
        const grid = document.createElement('div');
        grid.classList.add("grid");
        grid.style.flex= `1 0 ${100/userSelection}%`;
        gridContainer.appendChild(grid);
    }
    
}
}
}

//you cant normally create multiple divs like this, however
//i guess because of interactions with scope if its in a function
// you can create  new div's using the same variable, OR you can 
//do the initial declaration using "let" instead of "const" and you
//can continue to create without using a function.


function getColorValues() {
    let r = Math.random()*100;
    let g=Math.random()*100;
    let b=Math.random()*100;
    return `rgb(${r}, ${g}, ${b})`;
}