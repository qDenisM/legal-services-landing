const parser = new DOMParser()

fetch('my_team.xml')
	.then(response => response.text())
	.then(xmlString => {
		const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
		const myTeamDescDiv = document.createElement('div')
		myTeamDescDiv.classList.add('my_team__desc')

		xmlDoc.querySelectorAll('my__team_cards').forEach(card => {
			const div = document.createElement('div')
			div.classList.add('my__team_cards')
			div.classList.add(card.getAttribute('class'))

			const figure = document.createElement('figure')
			div.appendChild(figure)

			const img = document.createElement('img')
			img.classList.add('my_team__pict')
			img.src = card.querySelector('img').getAttribute('src')
			img.alt = card.querySelector('img').getAttribute('alt')
			figure.appendChild(img)

			const p = document.createElement('p')
			p.classList.add(card.querySelector('p').getAttribute('class'))
			p.innerHTML = card.querySelector('p').innerHTML
			div.appendChild(p)

			myTeamDescDiv.appendChild(div)
		})

		const myTeam = document.getElementById('myTeam')
		myTeam.appendChild(myTeamDescDiv)
	})
	.catch(error => console.error('Проблема открытия XML-файла: ', error))
