let fs = require('fs');
let archivo = fs.readFileSync('Day4/parejas.txt', 'utf8');
let lineas = archivo.split("\n");

// Parte 1
let suma = 0
let suma2 = 0

for (let i = 0; i < lineas.length; i++) {
    let linea = lineas[i];
    let elf1 = linea.split(',')[0];
    let elf2 = linea.split(',')[1];
    let elf1min = parseInt(elf1.split('-')[0]);
    let elf1max = parseInt(elf1.split('-')[1]);
    let elf2min = parseInt(elf2.split('-')[0]);
    let elf2max = parseInt(elf2.split('-')[1]);

    if (elf1min >= elf2min && elf1max <= elf2max) {
        suma += 1;
    }
    else if (elf2min >= elf1min && elf2max <= elf1max) {
        suma += 1;
    }

    // Parte 2
    if (Math.max(elf1min, elf2min) <= Math.min(elf1max, elf2max)) {
        suma2 += 1
    }

}
console.log("Parte 1: " + suma);
console.log("Parte 2: " + suma2);


