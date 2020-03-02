function keyPressed() {
  if (keyCode == 87) { //W
    p1.pos.y -= 10;
  }
  if (keyCode == 83) { //s
    p1.pos.y += 10;
  }
  if (keyCode == 65) { //a
    p1.pos.x -= 10;
  }
  if (keyCode == 68) { //d
    p1.pos.x += 10;
  }
}
