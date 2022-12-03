let fs = require('fs');
let archivo = fs.readFileSync('Day3/mochilas.txt', 'utf8');
let mochila = archivo.split(/\r\n/g)

let comp1 = []
mochila.forEach(m => comp1.push(m.slice(0, m.length / 2)));

let comp2 = []
mochila.forEach(m => comp2.push(m.slice(m.length / 2, m.length)));

const valores = {
    "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13,
    "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25,
    "z": 26, "A": 27, "B": 28, "C": 29, "D": 30, "E": 31, "F": 32, "G": 33, "H": 34, "I": 35, "J": 36, "K": 37,
    "L": 38, "M": 39, "N": 40, "O": 41, "P": 42, "Q": 43, "R": 44, "S": 45, "T": 46, "U": 47, "V": 48, "W": 49,
    "X": 50, "Y": 51, "Z": 52
};

// Parte 1
let suma = 0
for (let i = 0; i < comp1.length; i++) {
    for (let j = 0; j < comp1[i].length; j++) {
        if (comp1[i].includes(comp2[i][j])) {
            if (comp2[i][j] in valores) {
                suma += valores[comp2[i][j]]
                break;
            }
        }
    }
}

console.log("Parte 1: " + suma);

// Parte 2
let grupos = []
for (let i = 0; i < mochila.length; i += 3) {
    grupos.push(mochila.slice(i, i + 3))
}

let suma2 = 0
let larga
for (let i = 0; i < grupos.length; i++) {
    larga = grupos[i].reduce((acc, val) => acc.length > val.length ? acc : val, '');
    for (let j = 0; j < larga.length; j++) {
        if (grupos[i][0].includes(larga[j]) && grupos[i][1].includes(larga[j]) && grupos[i][2].includes(larga[j])) {
            if (larga[j] in valores) {
                suma2 += valores[larga[j]]
                break;
            }
        }
    }

}

console.log("Parte 2: " + suma2);