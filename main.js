// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

let biciclette = [
  (bicicletta1 = {
    nome: "Bartali",
    peso: 8,
    unitaPeso: "kg",
  }),
  (bicicletta2 = {
    nome: "Savadek",
    peso: 9,
    unitaPeso: "kg",
  }),
  (bicicletta3 = {
    nome: "Agazzini",
    peso: 10,
    unitaPeso: "kg",
  }),
];

pesi = [];

firstBikeWeight = parseInt(bicicletta1.peso);
secondBikeWeight = parseInt(bicicletta2.peso);
thirdBikeWeight = parseInt(bicicletta3.peso);

unit = bicicletta1.unitaPeso;
console.log(
  `I pesi delle biciclette sono: ${firstBikeWeight}${unit}, ${secondBikeWeight}${unit}, ${thirdBikeWeight}${unit}`
);

pesi.push(firstBikeWeight);
pesi.push(secondBikeWeight);
pesi.push(thirdBikeWeight);

pesoMinore = Math.min(parseInt(pesi));
console.log(`Il peso minore è: ${pesoMinore}${unit}`);

// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

let squadre = [
  (squadra1 = {
    nome: "Inter",
    punti: 0,
    falliSubiti: 0,
  }),
  (squadra2 = {
    nome: "Juventus",
    punti: 0,
    falliSubiti: 0,
  }),
  (squadra3 = {
    nome: "Milan",
    punti: 0,
    falliSubiti: 0,
  }),
];

squadra1.punti = Math.floor(Math.random() * 50) + 1;
squadra2.punti = Math.floor(Math.random() * 50) + 1;
squadra3.punti = Math.floor(Math.random() * 50) + 1;

squadra1.falliSubiti = Math.floor(Math.random() * 10) + 1;
squadra2.falliSubiti = Math.floor(Math.random() * 10) + 1;
squadra3.falliSubiti = Math.floor(Math.random() * 10) + 1;

console.log(squadre);

newArray = [];

newArray.push(squadra1.nome);
newArray.push(squadra1.falliSubiti);
newArray.push(squadra2.nome);
newArray.push(squadra2.falliSubiti);
newArray.push(squadra3.nome);
newArray.push(squadra3.falliSubiti);

console.log(newArray);

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

numeri = [1, 2, 3, 4, 5];

num1 = prompt("inserisci il numero più piccolo:");
num2 = prompt("inserisci il numero più grande:");

arrayBetween = [];

function numBetween([], num1, num2) {
  for (let numero in numeri)
    if (numero > num1 && numero < num2) {
      arrayBetween.push(numero);
    }
  return console.log(arrayBetween);
}

numBetween(numeri, num1, num2);
