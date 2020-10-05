import header from '../templates/header'
import home from '../pages/home'
import character from '../pages/character'
import error404 from '../pages/error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import pagination from '../templates/pagination'
import footer from '../templates/footer'

const routes = {
	'/': home,
	'/:page': home,
	'/:id': character,
	'contact': 'Contact',
}

async function router() {
	const $header = null || document.getElementById('header')
	const $content = null || document.getElementById('content')
	const $pagination = null || document.getElementById('pagination')
	const $footer = null || document.getElementById('footer')

	$header.innerHTML = await header()

	let hash = getHash()
	let route = await resolveRoutes(hash)
	console.log(route)
	let render = routes[route] ? routes[route] : error404
	
	$content.innerHTML = await render()
	
	$pagination.innerHTML = await pagination()

	$footer.innerHTML = await footer()

	
}

export default router