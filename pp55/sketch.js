var cam;

function setup() {
  createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	
  cam = createCapture(VIDEO);
  cam.hide();
  cam.size(150,70);
}

function draw() {
  image(cam, 0, 0-200);
  cam.loadPixels();
 
	for (var y=0; y<cam.height; y++) {
		for (var x=0; x<cam.width; x++) {
			var index = (y*cam.width + x) * 4;
      var r = pixels[index];
      var g = pixels[index+0];
      var b = pixels[index+1];
			
    
      fill(r,g,b,50);
      var pScale = 11;
      rect(x*pScale,y*pScale,pScale,pScale);

    }
  }
  
  // cam.updatePixels();
  
}

