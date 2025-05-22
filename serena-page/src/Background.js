import * as React from 'react';
import { ReactP5Wrapper } from '@p5-wrapper/react';

var initialCirclesXY = {};
var circles = [];

function background(p5)
{
  p5.setup = () => 
  {
    let canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    // canvas.position(0, 0);
    canvas.style('z-index', '-1');
    class BackgroundCircle {
      constructor(index, colour) {
        this.index = index;
        this.x = initialCirclesXY[this.index]['x'];
        this.y = initialCirclesXY[this.index]['y'];
        this.size = p5.windowHeight / 1.5;
        this.colour = colour;

        this.show = function () {
          p5.noStroke();
          p5.fill(this.colour);
          p5.circle(this.x, this.y, this.size * 2);
        };

        this.moveRadious = function (desiredX, desiredY) {
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
        };
      }
    }

    initialCirclesXY = {
      0: {
        x: p5.windowWidth/6,
        y: p5.windowHeight/5,
      },
      1: {
        x: p5.windowWidth/4*3, 
        y: p5.windowHeight/5,
      },
      2: {
        x: p5.windowWidth/8, 
        y: p5.windowHeight*3/4,
      },
      3: {
        x: p5.windowWidth/4*3, 
        y: p5.windowHeight*3/4,
      },
    }
    circles = [new BackgroundCircle(0,"#EBBBBB30"), new BackgroundCircle(1, "#7AB9EC30"), new BackgroundCircle(2, "#EAED6330"), new BackgroundCircle(3, "#9DF4AD30")];


    // static draw
    p5.background(255);
    for (let circle of circles)
    {
      circle.show();
    }
    for (let bcircle of circles) {
      bcircle.x = initialCirclesXY[bcircle.index]['x'];
      bcircle.y = initialCirclesXY[bcircle.index]['y'];
      bcircle.size = p5.windowHeight/1.5;
    }
  }

  // p5.draw = () =>
  // {
  //   p5.background(255);
  //   for (let circle of circles)
  //   {
  //     circle.show();
  //   }
  //   for (let bcircle of circles) {
  //     bcircle.x = initialCirclesXY[bcircle.index]['x'];
  //     bcircle.y = initialCirclesXY[bcircle.index]['y'];
  //     bcircle.size = p5.windowHeight/1.5;
  //   }
  // }
}

export function Background() {
  return <ReactP5Wrapper sketch={background}/>;
}

// function mouseClicked() {
//   circlesXY = {
//     0: {
//         x: 0,
//         y: 0,
//       },
//       1: {
//         x: windowWidth/4*3, 
//         y: -windowHeight/4,
//       },
//       2: {
//         x: windowWidth/4, 
//         y: windowHeight*5/4,
//       },
//       3: {
//         x: windowWidth, 
//         y: windowHeight*5/4,
//       },
//   }
//   for (let bcircle of circles) {
//       bcircle.x = circlesXY[bcircle.index]['x'];
//       bcircle.y = circlesXY[bcircle.index]['y'];
//       bcircle.size = windowHeight/1.5;
//     }
// }