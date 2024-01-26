const questions = [
  {
    question: "Which country won the first edition of Football World Cup?",
    answers:[
      { text: "Argentina", correct: false},
      { text: "Brazil", correct: false},
      { text: "Uruguay", correct: true},
      { text: "Germany", correct: false},
    ]
  },
  {
    question: "Which footballer has the highest number of goals?",
    answers:[
      { text: "Cristiano Ronaldo", correct: true},
      { text: "Lionel Messi", correct: false},
      { text: "Ronaldo Nazario", correct: false},
      { text: "Diego Maradona", correct: false},
    ]
  },
  {
    question: "Which player has the most number of FIFA ballon d'or?",
    answers:[
      { text: "Cristiano Ronaldo", correct: false},
      { text: "Luis Figo", correct: false},
      { text: "Lionel Messi", correct: true},
      { text: "Karim Benzema", correct: false},
    ]
  },
  {
    question: "Which club has the most number of UCL titles?",
    answers:[
      { text: "AC Milan", correct: false},
      { text: "Real Madrid", correct: true},
      { text: "Liverpool", correct: false},
      { text: "Arsenal", correct: false},
    ]
  },
  {
    question: "What does FIFA stand for?",
    answers:[
      { text: "Fast If Furious Again", correct: false},
      { text: "Federation In Football Association", correct: false},
      { text: "Fish In Funny Area", correct: false},
      { text: "Fédération internationale de football association", correct: true},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionN0 = currentQuestionIndex + 1;
  questionElement.innerText = questionN0 + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
});


startQuiz();
