const quizDB = [{
    question: "Q1: What is the capital city of Japan?",
    a: "Tokyo *",
    b: "Washington D.C.",
    c: "London",
    d: "Moscow",
    ans: "ans1",
    img: "bg.jpg"
},
{
    question: "Q2: What is the capital city of Brazil?",
    a: "Sao Paulo",
    b: "Rio de Janeiro",
    c: "Brasilia *",
    d: "Berlin",
    ans: "ans3",
    img: "bg.jpg"

},
{
    question: "Q3: What is the capital city of South Africa?",
    a: "Johannesburg",
    b: "Cape Town",
    c: "Pretoria *",
    d: "Madrid",
    ans: "ans3",
    img: "bg.jpg"

},

{
    question: "Q4: What is the capital city of Australia?",
    a: "Sydney",
    b: "Melbourne",
    c: "Brisbane",
    d: "Canberra *",
    ans: "ans4",
    img: "bg.jpg"

},

{
    question: "Q5: What is the capital city of Canada?",
    a: "Toronto",
    b: "Montreal",
    c: "Vancouver",
    d: "Ottawa *",
    ans: "ans4",
    img: "bg.jpg"

},

{
    question: "Q6: What is the capital city of France?",
    a: "Tokyo",
    b: "Rome",
    c: "New Delhi",
    d: "Paris *",
    ans: "ans4",
    img: "bg.jpg"

},

{
    question: "Q7: What is the capital city of Italy?",
    a: "London",
    b: "New York City",
    c: "Rome *",
    d: "Madrid",
    ans: "ans3",
    img: "bg.jpg"

},

{
    question: "Q8: What is the capital city of Mexico?",
    a: "Paris",
    b: "Berlin",
    c: "Mexico City *",
    d: "Moscow",
    ans: "ans1",
    img: "bg.jpg"

},

{
    question: "Q9: What is the capital city of China?",
    a: "London",
    b: "Madrid",
    c: "Beijing *",
    d: "Rome",
    ans: "ans3",
    img: "bg.jpg"

},

{
    question: "Q10: What is the capital city of Spain?",
    a: "Madrid *",
    b: "New York City",
    c: "Paris",
    d: "Berlin",
    ans: "ans1",
    img: "bg.jpg"

},

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const imgChange = document.querySelector('#img')

const Submit = document.querySelector('#submit');
const Start = document.querySelector('#start');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

let questioncount = 0;
let score = 0;

const loadQuestion = () => {
const QuestionList = quizDB[questioncount];
question.innerText = QuestionList.question;
option1.innerText = QuestionList.a;
option2.innerText = QuestionList.b;
option3.innerText = QuestionList.c;
option4.innerText = QuestionList.d;
imgChange.src = QuestionList.img;
};

const musicBtn = document.getElementById('musicBtn');
const music = document.getElementById('music');
// music.play();

musicBtn.addEventListener('click', () => {
    if (musicBtn.textContent == "STOP") {
        music.pause();
        music.currentTime = 0;
        musicBtn.textContent = "PLAY";
    } else {
        musicBtn.textContent = "STOP";
        music.play();
    }
});

document.getElementById("submit").disabled = true;

function startWords() {
    let one = setTimeout(() => {
        option1.innerText = "ONE";
    }, 1000);
    let two = setTimeout(() => {
        option2.innerText = "TWO";
    }, 2000);
    let three = setTimeout(() => {
        option3.innerText = "THREE";
    }, 3000);
    let go = setTimeout(() => {
        option4.innerText = "GO!";
    }, 4000);
    setTimeout(() => {
        loadQuestion();
        document.getElementById("submit").disabled = false;
    }, 5000);
}

var timerInterval;
var timeLeft = 15;
function startGame() {
    startWords();
    document.getElementById("start").style.display = "none";
    setTimeout(() => {
        timerInterval = setInterval(updateTimer, 1000);
    }, 5000);
};

function updateTimer() {
  timeLeft--;
  document.getElementById("timer").innerHTML = Math.floor(timeLeft / 60) + ":" + (timeLeft % 60 < 10 ? "0" : "") + timeLeft % 60;

  if (timeLeft == 0) {
    document.getElementById("submit").style.display = "none";

    showscore.innerHTML = `
    <h4 class="d-flex align-self-center">YOUR SCORE: ${score}</h4>
    <button type="button" class="btn btn-danger" id="submit" onclick = "location.reload()">Play Again</button>
    `;
    showscore.classList.remove('d-none');
    clearInterval(timerInterval);
  }
};

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectall = () => {
answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

Start.addEventListener('click', () => {
    startGame();
});

Submit.addEventListener('click', () => {
    const checkedanswer = getCheckAnswer();

    if (checkedanswer == quizDB[questioncount].ans) {
        score++;
    }
    questioncount++;
    deselectall();

    if (questioncount < quizDB.length) {
        loadQuestion();
    } else {
        showscore.innerHTML = `
        <h4 class="d-flex align-self-center">YOUR SCORE: ${score}</h4>
        <button type="button" class="btn btn-danger" id="submit" onclick = "location.reload()">Play Again</button>
        `;
        showscore.classList.remove('d-none');
    }
});