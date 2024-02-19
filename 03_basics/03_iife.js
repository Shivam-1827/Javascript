// Immediately Invoked Function Expressions(IIFE)
// Why IIFE is used ?
// Sometimes there is lot of pollution inside the global variable then that case we use IIFE to get rid of that .

// EG:
(function chai() {
    console.log(`DB Connected 1`);
})();  // named IIFE

(() => {
    console.log(`DB Connected 2`);
})()


// ()() => Here in first paranthesis function is defined and second paranthesis is used for execution