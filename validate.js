function telValidate() {
	let telInput = document.getElementById('tel')
	let telPattern = /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/
	if (!telPattern.test(telInput.value.trim())) {
		telInput.style.borderColor = 'red'
	} else {
		telInput.style.borderColor = 'green'
	}
}

function mailValidate() {
	let emailInput = document.getElementById('email')
	let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
	if (!emailPattern.test(emailInput.value.trim())) {
		emailInput.style.borderColor = 'red'
	} else {
		emailInput.style.borderColor = 'green'
	}
}

document.addEventListener('DOMContentLoaded', function () {
	let telInput = document.getElementById('tel')

	telInput.addEventListener('input', function () {
		let value = telInput.value
		let newValue = ''
		for (let i = 0; i < value.length; i++) {
			if (!isNaN(value[i]) || '+()-'.includes(value[i])) {
				newValue += value[i]
			}
		}
		telInput.value = newValue
	})
})

document.addEventListener('DOMContentLoaded', function () {
	let form = document.querySelector('.help_form__info')

	form.addEventListener('submit', function (event) {
		let telInput = document.getElementById('tel')
		let emailInput = document.getElementById('email')
		let commentInput = document.getElementById('comment')

		telValidate()
		mailValidate()
		
		if (
			!telInput.checkValidity() ||
			!emailInput.checkValidity() ||
			!commentInput.checkValidity() ||
			telInput.value === '' ||
			emailInput.value === '' ||
			commentInput.value === ''
		) {
			commentInput.style.borderColor = 'red'
			event.preventDefault()
		}
		else {
			commentInput.style.borderColor = 'green'
		}
	})
})
