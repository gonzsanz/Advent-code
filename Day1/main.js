let fs = require('fs');

let archivo = fs.readFileSync('Day1/alorias.txt', 'utf8');
let elfos = archivo.split(/\r?\n/).map(Number);
let elfArray = [];
let tempArray = [];

// Parte uno

elfos.forEach(elf => {
    if (elf !== 0) {
        tempArray.push(elf)
    } else {
        elfArray.push(tempArray)
        tempArray = []
    }
})


let totalElf = elfArray.map(elfo => elfo.reduce((a, b) => a + b, 0))
let sortElf = totalElf.sort((a, b) => b - a);
console.log(sortElf);

// Parte dos
console.log(sortElf[0]+sortElf[1]+sortElf[2]);
