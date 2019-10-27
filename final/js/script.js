// Selecteert ALLE hartjes op de pagina
var heart = document.querySelectorAll("article button");
// Rekent uit hoeveel hartjes er op de pagina staan
var amountOfHearts = heart.length;

function toggleHeart() {

    /*\
    |*|  Voegt de class .added toe als het hartje die nog niet heeft,
    |*|  als het hartje wel al class .added heeft haalt het de class weg
    \*/

    this.classList.toggle("added");

}

/*\
|*|  De for loop zorgt ervoor dat de functie toggleHeart()
|*|  niet alleen werkt bij het eerste hartje, maar bij alle hartjes
\*/

for (var i = 0; i < amountOfHearts; i++) {
    heart[i].addEventListener('click', toggleHeart, false);
}
