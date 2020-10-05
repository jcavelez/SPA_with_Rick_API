function resolveRoutes(route) {
	if (route.length <= 3 ) {
		let validRoute = route === '/' ? route : '/:id'
		return validRoute
	}
	else {
		let validRoute = route.startsWith('?page=') ? '/:page' : route
		return validRoute
	}
	return route // por ej about o ?page=9
}

export default resolveRoutes