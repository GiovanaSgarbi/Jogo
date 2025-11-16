const form = document.getElementById('quizForm');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let score = 0;

    if (form.p1.value === "1") score++;

    const checkboxes = document.querySelectorAll('input[name="p2"]:checked');
    if (checkboxes.length === 2 && [...checkboxes].every(cb => cb.value === "1")) score++;

    const answer3 = form.p3.value.trim().toLowerCase();
    if (answer3 === "vibranium") score++;

    if (form.p4.value === "1") score++;
    if (form.p5.value === "1") score++;

    resultDiv.classList.remove('d-none');
    if (score === 5) {
        resultDiv.className = "alert alert-success";
        resultDiv.textContent = `Perfeito! Você é uma verdadeira lenda da Marvel! 🦸‍♂️`;
    } else {
        resultDiv.className = "alert alert-warning";
        resultDiv.textContent = `Você acertou ${score} de 5. Tente novamente para alcançar a vitória!`;
    }
});
