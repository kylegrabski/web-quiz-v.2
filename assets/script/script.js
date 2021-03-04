var $startPrompt = document.querySelector("#start-prompt");
var $startBtn = document.querySelector("#start-prompt button");
var $questionPrompt = document.querySelector("#question-prompt");
var $questionText = document.querySelector("#question-text");
var $questionOptions = document.querySelector("#options");
var $timer = document.querySelector("#timer");
var questions = [
  {
    text: "What is my name?",
    correctAnswer: "Kyle",
    options: ["Kyle", "Ollie", "Michael"],
  },
  {
    text: "Is the sky blue?",
    correctAnswer: "True",
    options: ["True", "False"],
  },
  {
    text: "What is my tortoise's name?",
    correctAnswer: "Gordon",
    options: ["Buck", "Dude", "Torta", "Gordon"],
  },
];
$startBtn.addEventListener("click", function (e) {
  // debugger
  // Hide start prompt
  $startPrompt.classList.add("hide");
  // Show our question prompt
  $questionPrompt.classList.remove("hide");
  // Update the content with our current question textCREATE THIS INTO A SEPERATE FUNCTION!!!
  // Render the options
  questions[0].options.forEach(function (item) {
    // $questionText.textContent = questions[0].text;
    $questionText.textContent = chooseQuestion();
    // create a html button
    var $btn = document.createElement("button");
    // set the text of that button to be our current item
    $btn.textContent = item;
    // append it to our options div
    $questionOptions.append($btn);
  });
  // Display our timer
  $timer.classList.remove("hide");
  // Start our timer
  startTimer();
});


function chooseQuestion () {
  var i = 0;
  currentQuestion = questions[i].text;
  console.log(questions[i].text);
  return currentQuestion;
  
}

function answerSelection() {
  // $questionOptions.addEventListener("click", function (item){
    if (questions.options === questions.correcAnswer){
      var j = 0;
      questions[j]++;
      return j;
    }
  // })
}




function startTimer() {
  var timeLeft = 100;

  var timerInterval = setInterval(function () {
    if (timeLeft > 1) {
      $timer.textContent = timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      $timer.textContent = timeLeft;
      timeLeft--;
    } else {
      $timer.textContent = 0;
      // clearInterval(timeLeft);
    }
    // when timer hits 0, end game
  }, 1000);
}

// end game function