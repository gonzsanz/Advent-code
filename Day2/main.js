let fs = require('fs');

let archivo = fs.readFileSync('Day2/estrategia.txt', 'utf8');
let jugada = archivo.split(/\r\n/g);

let j1 = []
jugada.forEach(j => j1.push(j[0]))

let j2 = []
jugada.forEach(j => j2.push(j[2]))

// Parte 1
let score = 0
for (let i = 0; i < j1.length; i++) {

    switch (j1[i]) {
        case "A": // PIEDRA
            if (j2[i] === "X") score += 4; // Empatar
            if (j2[i] === "Y") score += 8; // Ganar
            if (j2[i] === "Z") score += 3; // Perder
            break;
        case "B": // PAPEL
            if (j2[i] === "X") score += 1; // Perder
            if (j2[i] === "Y") score += 5; // Empatar
            if (j2[i] === "Z") score += 9; // Ganar
            break;
        case "C": // TIJERA
            if (j2[i] === "X") score += 7; // Ganar
            if (j2[i] === "Y") score += 2; // Perder
            if (j2[i] === "Z") score += 6; // Empatar
            break;
    }

}
console.log(score);

// Parte 2
let score2 = 0
for (let i = 0; i < j1.length; i++) {

    switch (j1[i]) {
        case "A": // PIEDRA
            if (j2[i] === "X") score2 += 3;  // Perder
            if (j2[i] === "Y") score2 += 4; // Empatar
            if (j2[i] === "Z") score2 += 8; // Ganar
            break;
        case "B":
            if (j2[i] === "X") score2 += 1; // Ganar
            if (j2[i] === "Y") score2 += 5; // Perder
            if (j2[i] === "Z") score2 += 9; // Empatar
            break;
        case "C":
            if (j2[i] === "X") score2 += 2; // Empatar
            if (j2[i] === "Y") score2 += 6; // Ganar
            if (j2[i] === "Z") score2 += 7; // Perder
            break;
    }

}

console.log(score2);