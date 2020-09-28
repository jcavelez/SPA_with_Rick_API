function resolveRoutes(route) {
	if (route.length <= 3 ) {
		let validRoute = route === '/' ? route : '/:id'
		return validRoute
	}
	return route // por ej about
}

export default resolveRoutes