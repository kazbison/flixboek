var heart = document.querySelectorAll("article button");
var amountOfHearts = heart.length;

function toggleHeart() {
    this.classList.toggle("added");
}

for (var i = 0; i < amountOfHearts; i++) {
    heart[i].addEventListener('click', toggleHeart, false);
}
