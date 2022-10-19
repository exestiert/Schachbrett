// classes der Figuren
class Figur {
  constructor(figur, color) {
    this.figur = figur;
    this.color = color;
  }
  moves(start, end) {
    let playgroundLeer1d = [].concat(...playgroundLeer); // Leeres Spielfeld wird in ein 1d Array verwandelt
    let indexLeerS = playgroundLeer1d.indexOf(start); // Startfeld ist mein Index von meine leeren 1d Spielfeld
    let indexLeerE = playgroundLeer1d.indexOf(end); // Endfeld ist mein Index von meinem leeren 1d Spielfeld
    let playground1d = [].concat(...playground); // Spielfeld mit Figuren wird in ein 1d Array verwandelt
    let playground2d = [];
    if (start) {
      // 1d Array Spielfeld mit Figuren wird als Index von 1d Array leeres Spielfeld behandelt und durch diesen ersetzt
      playground1d[indexLeerS] = playgroundLeer1d[indexLeerS]; 
    }
    if (end) {
      // 1d Array Spielfeld mit Figuren wird als Index von 1d Array leeres Spielfeld behandelt und durch die bewegende Figur ersetzt
      playground1d[indexLeerE] = this.figur;
    }
    // 1d Array Spielfeld mit Figuren wird mit splice in ein leeren Array gepusht um es in ein 2d Array zu verwandeln
      while (playground1d.length) playground2d.push(playground1d.splice(0, 9)); 
      playground = playground2d; // Mein Spielfeld wird als das Spielfeld mit den Änderungen behandelt 
  }
  umwandlung(start, end, figur){
    let playgroundLeer1d = [].concat(...playgroundLeer);
    let indexLeerS = playgroundLeer1d.indexOf(start);
    let indexLeerE = playgroundLeer1d.indexOf(end);
    let playground1d = [].concat(...playground);
    let playground2d = [];
    let arrB = []
    arrB.push(...playgroundLeer[8]) // Die hintere Reihe der schwarzen Figuren
    let arrW = []
    arrW.push(...playgroundLeer[1]) // Die hintere Reihe der weißen Figuren
       if (start && arrB.includes(end)) {
        // 1d Array Spielfeld mit Figuren wird als Index von 1d Array leeres Spielfeld behandelt und durch diesen ersetzt
        playground1d[indexLeerS] = playgroundLeer1d[indexLeerS];
          playground1d[indexLeerE] = figur; // Das Feld auf dem die Figur landet wird zur Figur die man im Parameter eingibt
        };
        if (start && arrW.includes(end)) {
          playground1d[indexLeerS] = playgroundLeer1d[indexLeerS];
            playground1d[indexLeerE] = figur;
          };
       while (playground1d.length) playground2d.push(playground1d.splice(0, 9));
       playground = playground2d;
   }
   rochade(startK, endK, startT, endT){
    let playgroundLeer1d = [].concat(...playgroundLeer);
    let indexLeerS = playgroundLeer1d.indexOf(startK); // Index König Startfeld
    let indexLeerS2 = playgroundLeer1d.indexOf(startT); // Index Turm Startfeld
    let indexLeerE = playgroundLeer1d.indexOf(endK); // Index König Endtfeld
    let indexLeerE2 = playgroundLeer1d.indexOf(endT) // Index Turm Endtfeld
    let playground1d = [].concat(...playground);
    let playground2d = [];
    let arrB = []
    arrB.push(...playgroundLeer[8])
    let arrW = []
    arrW.push(...playgroundLeer[1])
    if(arrB.includes(startK) && arrB.includes(startT) && arrB.includes(endK) && arrB.includes(endT)){
      playground1d[indexLeerS] = playgroundLeer1d[indexLeerS] // Feld wird zum Feldnamen
      playground1d[indexLeerS2] = playgroundLeer1d[indexLeerS2] // Feld wird ZUm Feldnamen
      playground1d[indexLeerE] = this.figur // Feld wird zur bewegenden Figur also König
      playground1d[indexLeerE2] = turmB.figur // Feld wird zum Turm
    }
    if(arrW.includes(startK) && arrW.includes(startT) && arrW.includes(endK) && arrW.includes(endT)){
      playground1d[indexLeerS] = playgroundLeer1d[indexLeerS]
      playground1d[indexLeerS2] = playgroundLeer1d[indexLeerS2]
      playground1d[indexLeerE] = this.figur
      playground1d[indexLeerE2] = turmW.figur
    }
    while (playground1d.length) playground2d.push(playground1d.splice(0, 9));
    playground = playground2d;
   }
}

//figuren

// White
const bauerW = new Figur("\u2659", "white");
const turmW = new Figur("\u2656", "white");
const pferdW = new Figur("\u2658", "white");
const läuferW = new Figur("\u2657", "white");
const dameW = new Figur("\u2655", "white");
const königW = new Figur("\u2654", "white");

// Black
const bauerB = new Figur("\u265f", "black");
const turmB = new Figur("\u265C", "black");
const pferdB = new Figur("\u265e", "black");
const läuferB = new Figur("\u265d", "black");
const dameB = new Figur("\u265b", "black");
const königB = new Figur("\u265A", "black");

//playground leer
var playgroundLeer = [
  ["", "H", "G", "F", "E", "D", "C", "B", "A"],
  [1, "H1", "G1", "F1", "E1", "D1", "C1", "B1", "A1"],
  [2, "H2", "G2", "F2", "E2", "D2", "C2", "B2", "A2"],
  [3, "H3", "G3", "F3", "E3", "D3", "C3", "B3", "A3"],
  [4, "H4", "G4", "F4", "E4", "D4", "C4", "B4", "A4"],
  [5, "H5", "G5", "F5", "E5", "D5", "C5", "B5", "A5"],
  [6, "H6", "G6", "F6", "E6", "D6", "C6", "B6", "A6"],
  [7, "H7", "G7", "F7", "E7", "D7", "C7", "B7", "A7"],
  [8, "H8", "G8", "F8", "E8", "D8", "C8", "B8", "A8"],
];

//playground
var playground = [
  ["", "H", "G", "F", "E", "D", "C", "B", "A"],
  [
    1,
    turmW.figur,
    pferdW.figur,
    läuferW.figur,
    königW.figur,
    dameW.figur,
    läuferW.figur,
    pferdW.figur,
    turmW.figur,
  ],
  [
    2,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
    bauerW.figur,
  ],
  [3, "H3", "G3", "F3", "E3", "D3", "C3", "B3", "A3"],
  [4, "H4", "G4", "F4", "E4", "D4", "C4", "B4", "A4"],
  [5, "H5", "G5", "F5", "E5", "D5", "C5", "B5", "A5"],
  [6, "H6", "G6", "F6", "E6", "D6", "C6", "B6", "A6"],
  [
    7,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
    bauerB.figur,
  ],
  [
    8,
    turmB.figur,
    pferdB.figur,
    läuferB.figur,
    königB.figur,
    dameB.figur,
    läuferB.figur,
    pferdB.figur,
    turmB.figur,
  ],
];

//Eingabe
// Um eine Figur zu bewegen ruf die Figur mit der Methode moves auf und gib als Parameter zuerst Start- und dann das Zielfeld als string ein.
// Ein Beispiel: bauerB.moves("G7", "G6")

// Wenn der Bauer die letzte Linie des Gegners ereicht nutze umwandlung um den Bauern in die Figur deiner Wahl zu ändern.
// Ein Beispiel: bauerB.umwandlung("H2", "H1", dameB.figur) -> dameB.figur steht für die Figur die man erhält

// Für die Rochade rufe den König mit der Methode rochade auf und gib als Parameter zuerst Start- und Zielfeld des König 
// und danach Start- Zielfeld des Turms als string ein.
// Ein Beispiel: königB.rochade("D8", "B8", "A8", "C8")

bauerW.moves("H2", "H3"); 
bauerB.moves("G7", "G6");
pferdW.moves("G1","F3");
bauerB.moves("H7", "H5");
bauerW.moves("G2", "G4");
bauerB.moves("H5", "G4")
pferdW.moves("F3", "E5");
pferdB.moves("G8", "F6");
pferdW.moves("E5", "F7");
läuferB.moves("F8","H6");
bauerW.moves("E2", "E3");
königB.rochade("E8", "G8", "H8", "F8");
bauerW.moves("F2", "F3");
bauerB.moves("G4", "F3");
läuferW.moves("F1", "G2");
bauerB.moves("F3", "F2");
königW.moves("E1", "E2");
bauerB.umwandlung("F2", "F1", turmB.figur);


// Die Züge immer oberhalb dieses Feld eingeben und erst nach Spielende wieder entfernen
// Solltest du nicht mit den Regeln des Schach vertraut sein lies dir zuerst die Regelwerk Datei durch


console.table(playground); // diese Zeile nicht löschen, das Spielfeld wird nach jedem zug Automatisch aktualisiert
