let conjuntos = require('./library');

let a = [1, 2, 3, 4, 6];
let b = [1, 3, 5, 6, 9];

let res1 = conjuntos.inter(a,b);
let res2 = conjuntos.union(a,b);

console.log(res1);
console.log(res2);