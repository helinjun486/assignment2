function setup() {
  createCanvas(windowWidth - 5, windowHeight - 5);

  nameInput = createInput();
  nameInput.style('font-size', '30px');
  nameInput.position(width / 3 + 100, height / 2 - 30);

  masterButton = createButton("HOST");
  masterButton.position(width / 3 + 50, height / 2 + 80);
  masterButton.style('font-size', '40px');
  masterButton.style('background', '#ff5722');
  masterButton.style('border', 'none');
  masterButton.style('width', '180px');
  masterButton.mousePressed(sendTheMessage1);

  followerButton = createButton("GUEST");
  followerButton.position(width / 3 + 290, height / 2 + 80);
  followerButton.style('font-size', '40px');
  followerButton.style('background', '#ffc107');
  followerButton.style('border', 'none');
  followerButton.style('width', '180px');
  followerButton.mousePressed(sendTheMessage2);
}

function draw() {
  background(72, 182, 245);

  fill(255)
  textSize(60);
  textAlign(CENTER);
  text("Swimming Race", windowWidth / 2, height / 2 - 100);

  textSize(30);
  textAlign(LEFT);
  text("Name:", windowWidth / 3, height / 2);


}

function sendTheMessage1() {
  if (nameInput.value() != "") {
    window.location.href = "/../swinging/index.html?nickName=" + nameInput.value() + "&owner=y";
  } else {
    window.alert("Please enter your name!");
  }
}
function sendTheMessage2() {
  if (nameInput.value() != "") {
    window.location.href = "/../swinging/index.html?nickName=" + nameInput.value();
  } else {
    window.alert("Please enter your name!");
  }
}