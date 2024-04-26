function calculateScore() {
    var score = 0;

    if (document.getElementById("q1b").checked) {
        score++;
    }
    if (document.getElementById("q2a").checked) {
        score++;
    }
    if (document.getElementById("q3b").checked) {
        score++;
    }
    if (document.getElementById("q4c").checked) {
        score++;
    }
    if (document.getElementById("q5a").checked) {
        score++;
    }

    var resultsText = `Votre score est de ${score} sur 5. Veuillez aller sur ce lien : https://massive.boats/V5V93N pour récupérer votre récompense`;
    document.getElementById("results").textContent = resultsText;
}
