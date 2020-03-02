function keyPressed() {
  if (keyCode == 87) { //W
    p.pos.y -= 10;
  }
  if (keyCode == 83) { //s
    p.pos.y += 10;
  }
  if (keyCode == 65) { //a
    p.pos.x -= 10;
  }
  if (keyCode == 68) { //d
    p.pos.x += 10;
  }
}
