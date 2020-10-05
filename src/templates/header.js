const header = () => {
	const view = `
	<div class="header-main">
		<div class="header-logo">
			<a href="/">
				<img src="assets/logo_RickSanchez_2569366.png" alt="logo rick" srcset="">
			</a>
			<span>Personajes de Rick & Morty</span>
		</div>
		<nav class="header-nav">
			<li>
				<ul>
					<a href="#/about/">
						About
					</a>
				</ul>
			</li>
		</nav>
</div>
	`
	return view
}

export default header