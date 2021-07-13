const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const enternContainerElement = document.getElementById
('myText')
const addbContainerElement = document.getElementById('add-btn')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex;

//----------------
let countRightAnswers = 0;
//----------------------

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', ()=> {
    currentQuestionIndex++
    setNextQuestion()
})


window.onload = function() { 
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('add-btn').style.display = 'none';
  };
//   window.onload = function() {
//     $("#b-navbar-fg").hide();
//   };

//test

function timerCountdown(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}






//starting game below----
function startGame() {

    var tenMinutes = 60 * 10,
        display = document.querySelector('#timer');
    timerCountdown(tenMinutes, display);
//-----------------------------------

document.getElementById('next-btn').style.display = 'block';

    
    console.log('Started')
   
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    countRightAnswers = 0; 
    enternContainerElement.classList.remove('hide')
    addbContainerElement.classList.remove('hide')
    // nextButton.classList.remove('hide')


    
    
}

//next question below------
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}


//making question appear
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click' , selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}



function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
} 

//selecting the answer below-------
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        if (document.getElementById('add-btn').style.display === 'block') {
            document.getElementById('add-btn').style.display = 'none'
        }
        nextButton.classList.remove('hide') 
         } else {
            document.getElementById('add-btn').style.display = 'block';
            document.getElementById('next-btn').style.display = 'none';
                startButton.innerText = 'Restart'
                startButton.classList.remove('hide')
            }
            //----------
            
    if (selectedButton.classList.value.includes("correct")) {
                countRightAnswers++;
             //
    }
             //--------------
    document.getElementById('right-answers').innerHTML = countRightAnswers; 
}
    

  
   //next btn below-------
   nextButton.classList.remove('hide')
    



function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
     } else {
         element.classList.add('wrong')
     }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//----enter name function
function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
  }





//questions
const questions = [
    {
        question: 'What does html stand for?',
        answers: [
            { text: 'Hyper Text Markup Language', correct: true },
            {text: 'Home Tool Markup Language', correct: false },
            {text: 'Hyperlinks and Text Markup Language', correct: false}
        ]
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        answers: [
            {text: '<h6>', correct: false},
            {text: '<head>', correct: false},
            {text: '<h1>', correct: true}
        ]
    },
    {
        question: 'Choose the correct HTML element to define important text',
        answers: [
            {text: '<important>', correct: false},
            {text: '<i>', correct: false},
            {text: '<strong>', correct: true}
        ]
    },
    {
        question: 'How can you make a bulleted list?',
        answers: [
            {text: '<ul>', correct: true},
            {text: '<dl>', correct: false},
            {text: '<strong>', correct: false}
        ]
    },
    {
        question: 'Which HTML element defines the title of a document?',
        answers: [
            {text: '<title>', correct: true},
            {text: '<dl>', correct: false},
            {text: '<head>', correct: false}
        ]
    },
]
