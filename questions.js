const forms = document.querySelectorAll('form.quiz__menu')
const titles = document.querySelectorAll('h1.quiz__container_title')
const nextButton = document.getElementById('nextButton')
const skipButton = document.getElementById('skipButton')
const backButton = document.getElementById('backButton')
const greenBar = document.getElementById('green-bar')
const grayBar = document.getElementById('gray-bar')
const questionNumber = document.getElementById('question-number')
const questionTelephoneNumber = document.getElementById('question-telephone')
const cards = document.getElementById('quiz-cards')
const questionOne = document.getElementById('question2')

titles[6].style.display = 'none'
backButton.style.display = 'none'


let width = 20

let currentQuestion = 0

for (let i = 1; i < forms.length; i++) {
	forms[i].style.display = 'none'
	titles[i].style.display = 'none'
}

function showPreviousQuestion() {
	if (currentQuestion > 0) {
		forms[currentQuestion].style.display = 'none' // Скрываем текущий вопрос
		titles[currentQuestion].style.display = 'none' // Скрываем заголовок текущего вопроса
		
		switch (currentQuestion) {
			case 1:
				greenBar.style.width = '20%'
				questionNumber.innerHTML = '1/5'
				break
			case 2:
				greenBar.style.width = '40%'
				questionNumber.innerHTML = '2/5'
				break
			case 3:
				greenBar.style.width = '60%'
				questionNumber.innerHTML = '3/5'
				break
			case 4:
				greenBar.style.width = '80%'
				questionNumber.innerHTML = '4/5'
				break
		}

		currentQuestion-- // Уменьшаем счетчик текущего вопроса

		if (currentQuestion === 0) {
			backButton.style.display = 'none' // Если достигнут первый вопрос, скрываем кнопку "Назад"
			
		}

		forms[currentQuestion].style.display = 'flex' // Показываем предыдущий вопрос
		titles[currentQuestion].style.display = 'block' // Показываем заголовок предыдущего вопроса

		if (currentQuestion === 4) {
			grayBar.style.display = 'block' // Показываем прогресс бар на последнем вопросе
			cards.style.display = 'block'
			cards.style.display = 'flex'
		}
	}
}



// Функция для отображения следующего вопроса
function showNextQuestion() {
	forms[currentQuestion].style.display = 'none' // Скрываем текущий вопрос
	titles[currentQuestion].style.display = 'none' // Скрываем заголовок текущего вопроса
	currentQuestion++ // Увеличиваем счетчик текущего вопроса
	switch (currentQuestion) {
		case 0:
			greenBar.style.width = '20%'
			questionNumber.innerHTML = '1/5'
			
			break
		case 1:
			greenBar.style.width = '40%'
			questionNumber.innerHTML = '2/5'
			break
		case 2:
			greenBar.style.width = '60%'
			questionNumber.innerHTML = '3/5'
			break
		case 3:
			greenBar.style.width = '80%'
			questionNumber.innerHTML = '4/5'
			break
		case 4:
			greenBar.style.width = '100%'
			questionNumber.innerHTML = '5/5'
			questionTelephoneNumber.style.fontSize = '30px'
			questionTelephoneNumber.style.marginBottom = '40px'
			questionTelephoneNumber.style.marginTop = '0px'
			break
		case 5:
			
			grayBar.style.display = 'none'
			break
			
	} 	
	if (currentQuestion < forms.length) {
    
		forms[currentQuestion].style.display = 'flex' // Показываем следующий вопрос
		titles[currentQuestion].style.display = 'block' // Показываем заголовок следующего вопроса
		backButton.style.display = 'block' // Показываем кнопку "Назад", так как теперь есть предыдущий вопрос
		
	} else {
		// Если вопросы закончились, скрываем кнопки
		titles[6].style.display = 'block'
		nextButton.style.display = 'none'
		skipButton.style.display = 'none'
    backButton.style.display = 'none'
		cards.style.display = 'none'
		greenBar.style.display = 'none'
		grayBar.style.display = 'none'
	}
}




nextButton.addEventListener('click', showNextQuestion)

skipButton.addEventListener('click', showNextQuestion)

backButton.addEventListener('click', showPreviousQuestion)

console.log(titles)