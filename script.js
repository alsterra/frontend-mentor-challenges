const chall = [
    {
        name: 'base-apparel-coming-soon-page',
        originPlace:
            'http://github.com/filayaty/frontend-mentor-challenge/base-apparel-coming-soon-page'
    }
const list = document.getElementById('list');

projects.forEach(({ name, originplace }, i) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `
		<a href="/${name}/index.html">
			<img src="/${name}/design/desktop-design.jpg" alt="${name}" />
			<p>${i + 1}. ${formatProjectName(name)}</p>
		</a>
		<div class="links-container">
			<a href="/${name}/index.html" class="blue">
				<i class="fas fa-eye"></i>
			</a>
			<a href="${originplace}" class="youtube">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	`;

    list.appendChild(listItem);
});

function formatProjectName(name) {
    return name
        .split('-')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}