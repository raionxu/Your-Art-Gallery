let img;
let canvi = 1;
let bg;

function preload() {
  
  bg = loadImage('BG3.png')
  
  cor1 = loadImage("1.png");
  cor1 = loadImage("1.png");
  cor2 = loadImage("2.png");
  cor3 = loadImage("3.png");
  cor4 = loadImage("4.png");
  cor5 = loadImage("5.png");

  temps1 = loadImage("11.png");
  temps2 = loadImage("21.png");
  temps3 = loadImage("31.png");
  temps4 = loadImage("41.png");
  temps5 = loadImage("51.png");

  flor1 = loadImage("13.png");
  flor2 = loadImage("23.png");
  flor3 = loadImage("33.png");
  flor4 = loadImage("43.png");
  flor5 = loadImage("53.png");

  fruita1 = loadImage("14.png");
  fruita2 = loadImage("24.png");
  fruita3 = loadImage("34.png");
  fruita4 = loadImage("44.png");
  fruita5 = loadImage("54.png");
}

function setup() {
  createCanvas(900, 900);
  //noLoop();
  background(255);

  img = createCapture(VIDEO);
  img.size(280, 300);
  img.hide();
}

function draw() {
  //image(img, 0, 0);
  translate(width/3+10,height/3+10)

  img.loadPixels();

  for (var y = 0; y < img.height; y += 8) {
    for (var x = 0; x < img.width; x += 8) {
      //var pix = red(img.get(x, y));
      var pix = img.pixels[(y * img.width + x) * 4];

      if (pix <= 50) {
        switch (canvi) {
          case 1:
            image(cor1, x, y, 10, 10);
            break;
          case 2:
            image(temps1, x, y, 10, 10);
            break;
          case 3:
            image(flor1, x, y, 10, 10);
            break;
          case 4:
            image(fruita1, x, y, 10, 10);
            break;
        }
      } else if (pix > 50 && pix <= 100) {
        switch (canvi) {
          case 1:
            image(cor2, x, y, 10, 10);
            break;
          case 2:
            image(temps2, x, y, 10, 10);
            break;
          case 3:
            image(flor2, x, y, 10, 10);
            break;
          case 4:
            image(fruita2, x, y, 10, 10);
            break;
        }
      } else if (pix > 100 && pix <= 150) {
        switch (canvi) {
          case 1:
            image(cor3, x, y, 10, 10);
            break;
          case 2:
            image(temps3, x, y, 10, 10);
            break;
          case 3:
            image(flor3, x, y, 10, 10);
            break;
          case 4:
            image(fruita3, x, y, 10, 10);
            break;
        }
      } else if (pix > 150 && pix <= 200) {
        switch (canvi) {
          case 1:
            image(cor4, x, y, 10, 10);
            break;
          case 2:
            image(temps4, x, y, 10, 10);
            break;
          case 3:
            image(flor4, x, y, 10, 10);
            break;
          case 4:
            image(fruita4, x, y, 10, 10);
            break;
        }
      } else if (pix > 200 && pix <= 255) {
        switch (canvi) {
          case 1:
            image(cor5, x, y, 10, 10);
            break;
          case 2:
            image(temps5, x, y, 10, 10);
            break;
          case 3:
            image(flor5, x, y, 10, 10);
            break;
          case 4:
            image(fruita5, x, y, 10, 10);
            break;
        }
      }
    }
  }
  
  image(bg,-305,-280);
  
}

function mousePressed() {
  if (canvi < 4) {
    canvi = canvi + 1;
  } else {
    canvi = 1;
  }
}
