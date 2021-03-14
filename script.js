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



//time clock below-------------

function timer001() {
    c = c-1;
    if (c <20) {
        time001.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
    }
}

update = setInterval("timer001()", 1000)



//test








//starting game below----
function startGame() {
    c = 20;
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
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.legnth > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide') 
         } else {
           
                startButton.innerText = 'Restart'
                startButton.classList.remove('hide')
            }
            //----------
            if (selectedButton.dataset = correct) {
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

//----enter name
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
