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
		forms[currentQuestion].style.display = 'none'
		titles[currentQuestion].style.display = 'none'

		switch (currentQuestion) {
			case 1:
				greenBar.style.width = '20%'
				questionNumber.innerHTML = '1/5'
				skipButton.style.display = 'block'
				break
			case 2:
				greenBar.style.width = '40%'
				questionNumber.innerHTML = '2/5'
				skipButton.style.display = 'block'
				break
			case 3:
				greenBar.style.width = '60%'
				questionNumber.innerHTML = '3/5'
				skipButton.style.display = 'block'
				break
			case 4:
				greenBar.style.width = '80%'
				questionNumber.innerHTML = '4/5'
				skipButton.style.display = 'block'
				break
		}

		currentQuestion--

		if (currentQuestion === 0) {
			backButton.style.display = 'none'
			skipButton.style.display = 'block'
		}

		forms[currentQuestion].style.display = 'flex'
		titles[currentQuestion].style.display = 'block'

		if (currentQuestion === 4) {
			grayBar.style.display = 'block'
			cards.style.display = 'block'
			cards.style.display = 'flex'
			skipButton.style.display = 'block'
		}
	}
}

function showNextQuestion() {
	const currentForm = forms[currentQuestion]
	let isValid = true
	let isChecked = false 

	currentForm
		.querySelectorAll(
			'input[type="radio"], input[type="text"], input[type="tel"]'
		)
		.forEach(input => {
			if (
				(input.type === 'radio' || input.type === 'checkbox') &&
				input.checked
			) {
				isChecked = true 
			}
			if (
				(input.type === 'text' || input.type === 'tel') &&
				input.value.trim()
			) {
				isChecked = true
			}
			if (
				(input.type === 'text' || input.type === 'tel') &&
				!input.value.trim() &&
				input.name !== 'tel'
			) {
				isValid = false
			}
			if (
				input.type === 'tel' &&
				!/^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/.test(input.value.trim())
			) {
				isValid = false
			}
		})

	if (currentQuestion === forms.length - 1) {
		const phoneInput = currentForm.querySelector('input[name="tel"]')
		if (phoneInput && !phoneInput.value.trim()) {
			isValid = false
		}
	}

	if (!isValid || !isChecked) {
		alert('Пожалуйста, выберите ответ или введите данные')
		return
	}

	if (!isValid || !isChecked) {
		alert('Пожалуйста, выберите ответ или введите данные')
		return
	}

	forms[currentQuestion].style.display = 'none'
	titles[currentQuestion].style.display = 'none'
	currentQuestion++
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
			skipButton.style.display = 'none'
			break
	}
	if (currentQuestion < forms.length) {
		forms[currentQuestion].style.display = 'flex'
		titles[currentQuestion].style.display = 'block'
		backButton.style.display = 'block'
	} else {
		titles[6].style.display = 'block'
		nextButton.style.display = 'none'
		skipButton.style.display = 'none'
		backButton.style.display = 'none'
		cards.style.display = 'none'
		greenBar.style.display = 'none'
		grayBar.style.display = 'none'
	}
}

function skipQuestion() {
	forms[currentQuestion].style.display = 'none'
	titles[currentQuestion].style.display = 'none'
	currentQuestion++

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
			skipButton.style.display = 'none'
			break
	}

	if (currentQuestion < forms.length) {
		forms[currentQuestion].style.display = 'flex'
		titles[currentQuestion].style.display = 'block'
		backButton.style.display = 'block'
	} else {
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
skipButton.addEventListener('click', skipQuestion)
backButton.addEventListener('click', showPreviousQuestion)
