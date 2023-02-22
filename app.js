const circle = document.getElementById('circle');
// const upBtn = document.getElementById('upBtn');
// const downBtn = document.getElementById('downBtn');

let rotation = 0

function one() {
	circle.style.transform = `rotate(${rotation}deg)`
}

function rotate()  {
	document.getElementById('upBtn').onclick = function() {
		rotation += 90;
		one()
	}
	document.getElementById('downBtn').onclick = function() {
		rotation += -90
		one()
	}
	
}

upBtn.addEventListener('click', rotate)
downBtn.addEventListener('click', rotate)
