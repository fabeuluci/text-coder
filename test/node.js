var tc = require("../browser/index")

let text = "Ala ma kota żźćąśłńó ŻŹĆĄŚŁÓŃ";

let te = new tc.TextEncoder();
let array = te.encode(text);

let td = new tc.TextDecoder();
let res = td.decode(array);

console.log(text == res, text, array, res);