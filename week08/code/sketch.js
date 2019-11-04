console.log("p5 sketch here!");

let r;
let g;
let b;

let theRainbow = ["red", "orange", "yellow", "green", "blue"];

function setup(){
	createCanvas(windowWidth,windowHeight);
	r = random(255)
	g = random(255)
	b= random(255);
	console.log(r,g,b);


	for (var i =0; i < theRainbow.length; i++){
		console.log(theRainbow[i])
	}

}



function draw(){
	background(200,0,200);
	frameRate(10)
	// fill(random(255),random(255),random(255));
	fill(r, g,b)
	ellipse(100,100, 50,50);

	for(let theIndex = 0; theIndex < 5; theIndex++){
		ellipse(200, height - 100 * theIndex, 25,25);
	}

	textSize(26)
	for (var i =0; i < theRainbow.length; i++){
	
		fill(theRainbow[i])
			text(theRainbow[i], 50 * i, 100);
		rect(25, 100 * i, 45, 50);
	}

}