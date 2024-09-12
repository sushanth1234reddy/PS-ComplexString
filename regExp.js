let pattern=/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8}/;
let input="Susha9888";

let output=pattern.test(input);
console.log(output);