const starWarsCharacters = [
  b = {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  c = {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
   f = {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  d = {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
   T = {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  m = {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  o = {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 875,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
   p= {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
 q =  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  v = {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/

let characters =  []


/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/

for (let n = 0; n < starWarsCharacters.length; n++ ){
  
  let amico = starWarsCharacters[n].name;
  
  characters.push(amico);
}

console.log(characters)


/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

femaleCharacters = [];

for ( let x =0; x < starWarsCharacters.length; x++){
const donna= starWarsCharacters[x]
if(donna.gender === "female"){femaleCharacters.push(donna)}
}
console.log(femaleCharacters)






/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.

*/

const eyeColor = {

  blue: [],
  yellow: [],
  brown: [],
  red: [],
  blue_gray: []

};
for ( let i = 0; i < starWarsCharacters.length; i++){
    const selezionaCarattere = starWarsCharacters[i];

  switch (selezionaCarattere.eye_color) {
    case "blue":
      eyeColor.blue.push(selezionaCarattere);
      break;
    case "yellow":
      eyeColor.yellow.push(selezionaCarattere);
      break;
    case "red":
      eyeColor.red.push(selezionaCarattere);
      break;
    case "brown":
    eyeColor.brown.push(selezionaCarattere);
    break
    case "blue-gray":
      eyeColor.blue_gray.push(selezionaCarattere);
    default:
      console.log("Colore non riconosciuto");
  }
}
      console.log(eyeColor)

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
/*
for (let i = 0; i < starWarsCharacters.length; i++) {
  const currentCharacter = starWarsCharacters[i];

  switch (currentCharacter.eye_color) {
    case "blue":
      eyeColor.blue.push(currentCharacter);
      break;
    case "yellow":
      eyeColor.yellow.push(currentCharacter);
      break;
    case "brown":
      eyeColor.brown.push(currentCharacter);
      break;
    case "red":
      eyeColor.red.push(currentCharacter);
      break;
    case "blue-gray":
      eyeColor.blue_gray.push(currentCharacter);
      break;
    default:
      console.log("colore occhi non riconosciuto");
  }
}
console.log(eyeColor)*/




/*for( let i = 0;i< starWarsCharacters.length; i++) {
  const occhio = starWarsCharacters[i];

  switch (occhio.eye_color) {
    case "yellow":
      eyecolor.blue.push(occhio);
      break;
    case "brown":
      eyecolor.brown.push(occhio);
      break;
    case "red":
      eyecolor.red.push(occhio);
      break;
    case "blue_gray":
      eyecolor.blue_gray.push(occhio);
      break;
    case "blue":
      eyecolor.blue.push(occhio);
      break;

      default:
        console.log("colore non riconosciuto");
  }
}
*/



/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/

let crewMass = 0



for(let i = 0; i<starWarsCharacters.length; i++){
  
  let massasing = starWarsCharacters[i].mass
  crewMass += massasing

}
console.log(crewMass)

  

 


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

if(crewMass < 500){
  console.log("Ship is under loaded")
}
else if (crewMass > 500 && crewMass < 700){
  console.log("Ship is half loaded")
}
else if (crewMass > 700 && crewMass < 900){
  console.log("Warning: Load is over 700")
}
else if (crewMass > 900 && crewMass < 1000){
  console.log("Critical Load: Over 900")
}
else if (crewMass > 1000 && crewMass < 1500){
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
}
else if ( crewMass > 1500 ){
  console.log("the ship explode now!")
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/


const robots = [];

/*for (let y = 0; y < starWarsCharacters.length; y++) {
  let rob = starWarsCharacters[y];
  if (rob.gender === "n/a") {
    robots.push(rob);
  }
}*/

for (const rob of starWarsCharacters) {
  if (rob.gender === "n/a") {
    robots.push(rob);
  }
}
  console.log(robots);

  for (let newge of robots){
      newge.gender = "Ia"
  }
  console.log(robots)
/*for ( let x =0; x < starWarsCharacters.length; x++){
  const donna= starWarsCharacters[x]
  if(donna.gender === "female"){femaleCharacters.push(donna)}
  }*/


/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/



/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
