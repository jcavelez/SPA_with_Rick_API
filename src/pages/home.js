import getData from '../utils/getData'


async function home (){
	const API = 'https://rickandmortyapi.com/api/character'
	const characters = await getData(API)
	const view = `
		
	<div class="characters">
		${characters.results.map(character => `
			<article class="character-card">
				<a href="#/${character.id}/">
					<img class="character-card__image" src="${character.image}" alt="${character.name}">
					<div class="character-card__bottom">
						<h2>${character.name.split(' ')[0]}</h2>
					</div>
				</article>
			</a>
		`).join('')}
	</div>
	`


	return view
}

export default home 