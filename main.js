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

// Snack 3 (Bonus)
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
