const API = 'https://rickandmortyapi.com/api/'

async function getData(URI){
	try {
		const response = await fetch(URI)
		const data = await response.json()
		console.log(data)
		
		return data
	}
	catch(e) {
		console.log(e)
	}
}

export default getData