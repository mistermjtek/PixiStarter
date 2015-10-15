// Creates a PIXI element size 800,600
// Detects whether it is faster to use webGL or canvas
const renderer = new PIXI.autoDetectRenderer(800, 600);

// The renderer creates a canvas element to insert
document.body.appendChild(renderer.view);

// Create a root container that will hold the scene you want to draw.
const stage = new PIXI.Container();

// Creates a texture from a bunny.png image
const bunnyTexture = PIXI.Texture.fromImage('assets/bunny.png');
const bunny = new PIXI.Sprite(bunnyTexture);

// set position
bunny.position.x = 400;
bunny.position.y = 300;

// set scale
bunny.scale.x = 1.5;
bunny.scale.y = 1.5;

// Add the bunny to the scene we are building
stage.addChild(bunny);

const animate = function() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  // each from we spin the bunny around a bit
  bunny.position.y += 10;

  if(bunny.position.y > 610) {
    bunny.position.y = -10;
    bunny.position.x = Math.random() * 800;
  }

  // this is the main render call that makes pixi draw your container and its children
  renderer.render(stage);
}

// Kick off the animation loop (defined below)
animate();
