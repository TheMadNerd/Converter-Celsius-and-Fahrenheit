const one = document.querySelector('.one')
const two = document.querySelector('.two')
const replace = document.querySelector('.change')

const convert = document.querySelector('#converter')
const convertButton = document.querySelector('.conv')
const result = document.querySelector('.result')

const reset = document.querySelector('.reset')

const resetClick = () => {
    convert.value = ''
    result.textContent = ''
}

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

const conv = () => {
	if (convert.value !== '') {
		if (one.textContent === '°C') {
			let C = (convert.value * 9) / 5 + 32
			result.textContent = `${convert.value}°C to ${C}°F`
			convert.value = ''
		} else {
			let C = ((convert.value - 32) * 5) / 9
			result.textContent = `${convert.value}°F to ${C}°C`
			convert.value = ''
		}
	} else {
		result.textContent = 'Musisz podać jakąś wartość!'
	}
}

replace.addEventListener('click', change)

convertButton.addEventListener('click', conv)

reset.addEventListener('click', resetClick)
