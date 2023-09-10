// ฟังก์ชันสร้างโจทย์
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 99) + 1;
    const operator = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
    const question = `${num1} ${operator} ${num2}`;
    return {
        question,
        answer: eval(question).toFixed(2),
    };
}

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const resultElement = document.getElementById('result');

// เริ่มสุ่มโจทย์เมื่อโหลดหน้า
let currentQuestion = generateQuestion();
questionElement.textContent = currentQuestion.question;

// ตรวจสอบคำตอบ
document.getElementById('checkAnswer').addEventListener('click', function() {
    const userAnswer = parseFloat(answerElement.value);
    if (userAnswer === parseFloat(currentQuestion.answer)) {
        resultElement.textContent = 'Correct!! Go next';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Wrong!! Try again';
        resultElement.style.color = 'red';
    }
});

// เริ่มสุ่มโจทย์ใหม่
document.getElementById('generateQuestion').addEventListener('click', function() {
    currentQuestion = generateQuestion();
    questionElement.textContent = currentQuestion.question;
    answerElement.value = '';
    resultElement.textContent = '';
    resultElement.style.color = '';
});