function getHash() {
	// Return the anchor part of a URL. 
	//Assume that the current URL is www.example.com/test.htm#part2: 
	// The result of x will be: #part2
	const hash = location.hash
	// El método toLocaleLowerCase() retorna la cadena de texto desde la que 
	//se llama convertida en minúsculas, de acuerdo con cualquier localización 
	//específica de correspondencia de mayúsculas y minúsculas.
	const withoutHash = hash.slice(1).toLocaleLowerCase()
	const splited = withoutHash.split('/')
	
	return splited[1] || '/'
}

export default getHash