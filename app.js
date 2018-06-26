let Position2D = class Position2D {
	constructor(x, y) {
		this.x = x
		this.y = y
	}
}

let Case = class Case {
	constructor(position, size) {
		this.position = position
		this.size = size

		this.generateColor()
	}

	update() {
		this.generateColor()
	}

	draw() {
		fill(this.color)
		noStroke()
		renderRect(this.position, this.size)
	}

	generateColor() {
		this.color = color(random(255), random(255), random(255))
	}
}


//nees that to not kill P5.js ES6 no support
function renderRect(position, size) {
	rect(position.x * size + 1, position.y * size + 1, size - 1, size - 1)
}
  



var mapArray


function setup() {
	createCanvas(501, 501);  
	frameRate(30);
	stroke(255); // Set line drawing color to white

	// generate map (size : 20)
	mapArray = generateMap(20)
}

function draw() { 
	background(0);   // Set the background to black
	
	for (var x = 0; x < mapArray.length; x++) {
		for (var y = 0; y < mapArray[0].length; y++) {
			let caseIntance = mapArray[x][y]
			caseIntance.update()
			caseIntance.draw()
		}
	}
}


function generateMap(size) {
	let map = []
  
	for (var x = 0; x < size; x++) {
		map[x] = []
		for (var y = 0; y < size; y++) {
			let position = new Position2D(x, y)
			map[x][y] = new Case(position, 25)
		}
	}

	return map
}