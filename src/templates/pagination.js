const pagination = () => {
	const view = `
	<div class="pagination">
		<a href="#">&laquo;</a>
		<a href="#/?page=1/">1</a>
		<a href="#/?page=2/">2</a>
		<a href="#/?page=3/">3</a>
		<a href="#/?page=4/">4</a>
		<a href="#/?page=5/">5</a>
		<a href="#/?page=6/">6</a>
		<a href="#/?page=7/">7</a>
		<a href="#/?page=8/">8</a>
		<a href="#/?page=9/">9</a>
		<a href="#">&raquo;</a>
	</div>
	`
	return view
}

export default pagination