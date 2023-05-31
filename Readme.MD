# Schachspiel mit Vanila JavaScript


**Weiße Figuren**

König = '\u2654'
Dame = '\u2655'
Turm = '\u2656'
Läufer = '\u2657'
Pferd = '\u2658'
Bauer = '\u2659'

**Schwarze Figuren**

König = '\u265A'
Dame = '\u265B'
Turm = '\265C'
Läufer = '\u265D'
Pferd = '\u265E'
Bauer = '\u265F'


**Feld**

- Horizontal: A, B, C, D, E, F, G, H
- Vertikal: 1, 2, 3, 4, 5, 6, 7, 8
- Anzahl der Felder: 64

Das Schachspiel wird zwischen zwei Gegnern gespielt, die abwechselnd ihre Figuren auf einem quadratischen Spielbrett, "Schachbrett" genannt, ziehen. Der Spieler mit den weißen Figuren beginnt die Partie. Ein Spieler "ist am Zug", sobald der Zug seines Gegners ausgeführt worden ist.

Das Ziel eines jeden Spielers ist es, den gegnerischen König so **"anzugreifen"**, dass der Gegner keinen regelgemäßen Zug zur Verfügung hat, der ein **"Schlagen"** des Königs im folgenden Zug vermeiden würde. Der Spieler, der dieses Ziel erreicht, hat den gegnerischen König **"mattgesetzt"** und das Spiel gewonnen. Es ist nicht erlaubt, den eigenen König einem Angriff auszusetzen oder den König des Gegners zu schlagen. Der Gegner, dessen König mattgesetzt worden ist, hat das Spiel verloren.

Ist eine Stellung erreicht, in der keinem der beiden Spieler das Mattsetzen mehr möglich ist, ist das Spiel **remis** (unentschieden).
 
 
 - **1. Bewegung der Figuren**
 - **1.1** 
 Es ist nicht gestattet, eine Figur auf ein Feld zu ziehen, das bereits von einer Figur der gleichen Farbe besetzt ist. Wenn eine Figur auf ein Feld zieht, das von einer gegnerischen Figur besetzt ist, wird letztere geschlagen und als Teil desselben Zuges vom Schachbrett entfernt. 
 - **1.2 Läufer**
 Der **Läufer** darf auf ein beliebiges anderes Feld entlang einer der Diagonalen ziehen, auf welcher er steht. (darf nicht über dazwischenstehende Figuren hinwegziehen.)
 
   ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_laeufer.gif)
 
 - **1.3 Turm**
 Der **Turm** darf auf ein beliebiges anderes Feld entlang der Linie oder der Reihe ziehen, auf welcher er steht. (darf nicht über dazwischenstehende Figuren hinwegziehen.)
 
   ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_turm.gif)
 
- **1.4 Dame**
 Die **Dame** darf auf ein beliebiges anderes Feld entlang der Linie, der Reihe oder einer der Diagonalen ziehen, auf welcher sie steht. (darf nicht über dazwischenstehende Figuren hinwegziehen.)
 
  ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_dame.gif)
  
 - **1.5 Springer**
 Der **Springer** darf auf eines der Felder ziehen, die seinem Standfeld am nächsten, aber nicht auf gleicher Linie, Reihe oder Diagonalen mit diesem liegen.
 
   ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_springer.gif)
   
- **1.6 Bauer**   
Der Bauer darf vorwärts auf das unbesetzte Feld direkt vor ihm auf derselben Linie ziehen oder in seinem ersten entweder ein oder um zwei Felder entlang derselben Linie vorrücken, vorausgesetzt, dass beide Felder frei sind. Kann auf ein von einer gegnerischen Figur besetztes Feld diagonal vor ihm auf einer benachbarten Linie ziehen, indem er die Figur schlägt.
Sobald ein Bauer diejenige Reihe erreicht hat, die am weitesten von seinem Ursprungsfeld entfernt ist, muss er als Teil desselben Zuges gegen eine neue Dame, einen neuen Turm, Läufer oder Springer derselben Farbe ausgetauscht werden. Die Auswahl des Spielers ist nicht auf bereits geschlagene Figuren beschränkt. Dieser Austausch eines Bauern für eine andere Figur wird "Umwandlung" genannt, und die Wirkung der neuen Figur tritt sofort ein.

  ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_bauer.gif)

- **1.7 König** 
Es gibt zwei verschiedene Arten den König zu ziehen
entweder er zieht auf ein beliebiges angrenzendes Feld, das nicht von einer oder mehreren gegnerischen Figuren angegriffen wird.
oder er "rochiert". 
Die Rochade ist ein Zug des Königs und eines gleichfarbigen Turmes auf der gleichen Reihe. Sie gilt als ein Zug und wird folgendermaßen ausgeführt: Der König wird von seinem Ursprungsfeld um zwei Felder in Richtung des Turmes hin versetzt, dann wird dieser Turm auf das Feld gesetzt, das der König soeben überquert hat.

   ![Alt text](https://github.com/exestiert/Schachbrett/blob/main/img/Regel_k%C3%B6nig.gif)

Ein König "steht im Schach", wenn er von einer oder mehreren gegnerischen Figuren angegriffen wird, auch wenn diese selbst nicht ziehen können, weil sie anderenfalls den eigenen König im Angriff stehen lassen oder diesen einem Angriff aussetzen würden. Keine Figur darf einen Zug machen, welcher entweder den eigenen König einem Schach­gebot aussetzt oder seinen eigenen König in einem Schachgebot stehen lässt.
