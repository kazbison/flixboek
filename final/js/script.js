// Selecteert ALLE hartjes op de pagina
var heart = document.querySelectorAll("article button");
// Rekent uit hoeveel hartjes er op de pagina staan
var amountOfHearts = heart.length;

var heartTooltip = document.createElement("title");
heartTooltip.textContent = Verhaal opslaan;
document.querySelectorAll("article button svg").appendChild(heartTooltip);


function toggleHeart() {

    /*\
    |*|  Voegt de class .added toe als het hartje die nog niet heeft,
    |*|  als het hartje wel al class .added heeft haalt het de class weg
    \*/

    this.classList.toggle("added");

    /*\
    |*|  textcontent title in svg aanpassen als hartje class .added heeft
    \*/

//    if (this.classList.contains("added")) {
//        console.log("verhaal verwijderen");
//        this.heartTooltip.textContent = Verhaal verwijderen uit opgeslagen verhalen;
//    } else {
//        console.log("verhaal opslaan");
//        this.heartTooltip.textContent = Verhaal opslaan;
//    }

}

for (var i = 0; i < amountOfHearts; i++) {
    heart[i].addEventListener('click', toggleHeart, false);
}

// page load animation

//window.addEventListener("load", () => {
// document.querySelector("body").classList.add("loaded");
//});
