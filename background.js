var initialCirclesXY = {
};

circles = [];
class BackgroundCircle {
  constructor(index, colour) {
    this.index = index;
    this.x = initialCirclesXY[this.index]['x'];
    this.y = initialCirclesXY[this.index]['y'];
    this.size = windowHeight/1.5;
    this.colour = colour;
  }
  
  show() {
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.size*2);
  }
  
  moveRadious(desiredX, desiredY) {
    if (this.x > desiredX) {
      this.x -= 1;
    } else if (this.x < desiredX) {
      this.x += 1;
    }
    if (this.y > desiredY) {
      this.y -= 1;
    } else if (this.y < desiredY) {
      this.y += 1;
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  initialCirclesXY = {
      0: {
        x: windowWidth/4,
        y: windowHeight/5,
      },
      1: {
        x: windowWidth/4*3, 
        y: windowHeight/5,
      },
      2: {
        x: windowWidth/5, 
        y: windowHeight*3/4,
      },
      3: {
        x: windowWidth/4*3, 
        y: windowHeight*3/4,
      },
    }
  circles = [new BackgroundCircle(0,"#EBBBBB30"), new BackgroundCircle(1, "#7AB9EC30"), new BackgroundCircle(2, "#EAED6330"), new BackgroundCircle(3, "#9DF4AD30")];
}

function draw() {
  background(255);
  for (let circle of circles) {
    circle.show();
  }
}

function mouseClicked() {
  circlesXY = {
    0: {
        x: 0,
        y: 0,
      },
      1: {
        x: windowWidth/4*3, 
        y: -windowHeight/4,
      },
      2: {
        x: windowWidth/4, 
        y: windowHeight*5/4,
      },
      3: {
        x: windowWidth, 
        y: windowHeight*5/4,
      },
  }
  for (let bcircle of circles) {
      bcircle.x = circlesXY[bcircle.index]['x'];
      bcircle.y = circlesXY[bcircle.index]['y'];
      bcircle.size = windowHeight/1.5;
    }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    initialCirclesXY = {
      0: {
        x: windowWidth/4,
        y: windowHeight/5,
      },
      1: {
        x: windowWidth/4*3, 
        y: windowHeight/5,
      },
      2: {
        x: windowWidth/5, 
        y: windowHeight*3/4,
      },
      3: {
        x: windowWidth/4*3, 
        y: windowHeight*3/4,
      },
    }
    for (let bcircle of circles) {
      bcircle.x = initialCirclesXY[bcircle.index]['x'];
      bcircle.y = initialCirclesXY[bcircle.index]['y'];
      bcircle.size = windowHeight/1.5;
    }
}