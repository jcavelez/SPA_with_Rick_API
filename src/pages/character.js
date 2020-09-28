import getHash from '../utils/getHash'
import getData from '../utils/getData'

async function character() {
	const API = 'https://rickandmortyapi.com/api'
	const id = getHash()
	const character = await getData(`${API}/character/${id}`)
	const firstEpisode = await getData(character.episode[0])
	const lastEpisode = await getData(character.episode.pop())
	const view = `
	<div class="character-inner">
		<article class="character-detailed">
			<img class="character-detailed__cover" src="${character.image}" alt="${character.image}">
			<div class="character-detailed__data">
				<div class="character-detailed__main">
					<h2>${character.name} (${character.species})</h2>
				</div>
				<div class="character-detailed__origin">
					<h3>Origen: </h3>
					<p>${character.origin.name}</p>
				</div>
				<div class="character-detailed__location">
					<h3>Última ubicación: </h3>
					<p>${character.location.name}</p>
				</div>
				<div class="character-detailed__first">
					<h3>Primer Episodio:</h3>
					<p>${firstEpisode.name}</p>
				</div>
				<div class="character-detailed__last">
					<h3>Último Episodio: </h3>
					<p>${lastEpisode.name}</p>
				</div>
			</div>
		</article>
		
	</div>
	`
	return view
}

export default character