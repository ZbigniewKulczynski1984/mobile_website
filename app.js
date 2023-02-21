const circle = document.getElementById('circle');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let rotation = 0
function rotateUp() {
	rotation += 90;
	if (rotation === 360) {
		rotation = 0
	}

	circle.style.transform = `rotate(${rotation}deg)`
};

function rotateDown() {
	rotation += -90;
	if (rotation === 360) {
		rotation = 0
	}

	circle.style.transform = `rotate(${rotation}deg)`
};

upBtn.addEventListener('click', rotateUp)
downBtn.addEventListener('click', rotateDown)
