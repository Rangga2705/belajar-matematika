function startQuiz() {
    const question = "Apa hasil dari 5 + 3?";
    const answer = prompt(question);
    if (answer == 8) {
        alert("Jawaban Anda benar!");
    } else {
        alert("Jawaban Anda salah. Coba lagi!");
    }
}

function checkAnswer() {
    const exercise = document.getElementById("exercise");
    const userAnswer = prompt("Apa hasil dari 7 x 6?");
    if (userAnswer == 42) {
        exercise.innerHTML = "Jawaban Anda benar!";
    } else {
        exercise.innerHTML = "Jawaban Anda salah. Coba lagi!";
    }
}