function flappybird(){

// Load resources and starts the game loop
function preload(){
    game = new Game("game");
    game.preload(resources);
    game.state = init;
    gameloop();
}
document.onload = preload();

// Controls the state of the game
function gameloop(){
  game.processInput()
  if(game.ready){
    game.state();
  }
  game.update()
  setTimeout(gameloop,20);
}

// Create game objects and perform any game initialization
function init(){
  //background
  day = new Sprite(game.images.day, game)
  game.setBackground(day)
  //Flappy
  bird = new Animation(game.images.bird, 3, game, 132/3, 34)
  //floor
  
  bar = new Animation(game.images.bar, 3, game, 700, 100)
  bar.y= game.height - 50
  //grape coin
  ring = new Animation(game.images.ring, 64, game, 512/8, 512/8)
  ring.x = game.width + 50
  ring.setVector(2,90)
  ring.y = randint(175,325)
  ring.framerate = 1
  //top pipe
  tpipe = new Sprite(game.images.tpipe, game)
  //bottom pipe
  bpipe = new Sprite(game.images.bpipe, game)
  //gameover image
  go = new Sprite(game.images.go, game)
  //scoring grape coin
  score = new Animation(game.images.score, 64, game, 512/8, 512/8)
  score.framerate = 1
  score.x = 40
  score.y = game.height - 40
  scoref = new Font("30px", "Comic Sans MS", "brown", "black")
  //logo
  logo = new Sprite(game.images.logo, game)
  logo.y -= 100
  //sounds
  hit = new Sound(game.audios.hit)
  point = new Sound(game.audios.point)
  wing = new Sound(game.audios.wing)
  


  game.state = startscreen;
}

function startscreen(){
    game.scrollBackground("left", 1)
    bird.draw()
    bird.health = 5
    logo.draw()
    logo.scale = 2
    bar.draw()
    game.drawText( `Press [SPACE] to begin`, game.width/2 - 150, game.height - 40, scoref)
    if(key.pressed[key.space]){
      game.state = main;
    }
  
 }
// Game logic
function main(){
  game.scrollBackground("left", 1)
  bird.draw()
  tpipe.moveTo(ring.x, ring.y - 175)
  bpipe.moveTo(ring.x, ring.y + 175)
  ring.move()
  bar.draw()
  score.draw()
  game.drawText( `x ${game.score}`, score.right + 5, score.y + 7, scoref)
  game.drawText( `x ${bird.health}`, score.right + 550, score.y + 7, scoref)

  //game play
  if(key.pressed[key.space]){
    bird.y -= 2
    wing.play()
  }else{
    bird.y += 2 
  }
  if(bird.collidedWith(ring)){
    game.score += 1
    ring.visible = false
    point.play()
  }
  if(ring.x < 0){
    ring.x = game.width + 50
    ring.y = randint(175,325)
    ring.speed += 1
    ring.visible = true
  }

  //gameover condidition
  if(bird.collidedWith(bar) || bird.collidedWith(tpipe) || bird.collidedWith(bpipe) ){
    bird.health -= 1;
    hit.play()
    
    
  }

  if(bird.health <= 0){

    game.state = gameover

  }


}

  function gameover(){
    go.draw()
    if(key.pressed[key.Y]){
      game.score = 0
      bird.x = game.width/2
      bird.y = game.height/2
      ring.x = game.width + 50
      ring.y = randint(175,325)
      ring.speed = 2
      ring.visible = true
      game.state = main;
  }
  game.drawText( `Play Again? [Y/N]`, game.width/2 - 100, game.height - 40, scoref)
}
}

function fbduos(){

  // Load resources and starts the game loop
function preload(){
    game = new Game("game");
    game.preload(resources);
    game.state = init;
    gameloop();
}
document.onload = preload();

// Controls the state of the game
function gameloop(){
  game.processInput()
  if(game.ready){
    game.state();
  }
  game.update()
  setTimeout(gameloop,20);
}

// Create game objects and perform any game initialization
function init(){
  //background
  day = new Sprite(game.images.day, game)
  game.setBackground(day)
  //Flappy
  bird = new Animation(game.images.bird, 3, game, 132/3, 34)
  //floor
  bar = new Animation(game.images.bar, 3, game, 700, 100)
  bar.y= game.height - 50
  //grape coin
  ring = new Animation(game.images.ring, 64, game, 512/8, 512/8)
  ring.x = game.width + 50
  ring.setVector(2,90)
  ring.y = randint(175,325)
  ring.framerate = 1
  //top pipe
  tpipe = new Sprite(game.images.tpipe, game)
  //bottom pipe
  bpipe = new Sprite(game.images.bpipe, game)
  //gameover image
  go = new Sprite(game.images.go, game)
  //scoring grape coin
  score = new Animation(game.images.score, 64, game, 512/8, 512/8)
  score.framerate = 1
  score.x = 40
  score.y = game.height - 40
  scoref = new Font("30px", "Comic Sans MS", "brown", "black")
  //logo
  logo = new Sprite(game.images.logo, game)
  logo.y -= 100
  //sounds
  hit = new Sound(game.audios.hit)
  point = new Sound(game.audios.point)
  wing = new Sound(game.audios.wing)
 // tune1 = new Sound(game.audios.tune1)

  //copter
  copter = new Animation(game.images.copter, 9, game, 960/9 , 107)
  copter.scale=0.3
  


  game.state = startscreen;
}
function startscreen(){
    game.scrollBackground("left", 1)
   // tune1.play()
    bird.draw()
    logo.draw()
    logo.scale = 2
    bar.draw()
    game.drawText( `Press [SPACE] to begin`, game.width/2 - 140, game.height - 50, scoref)
    game.drawText( `Press [ENTER] to use Copter`,  game.width/2 - 185, game.height - 15, scoref)
    if(key.pressed[key.space]){
      game.state = main;
    }
  


 }
 
// Game logic
function main(){
  game.scrollBackground("left", 1)
  // tune1.play()
  bird.draw()
  tpipe.moveTo(ring.x, ring.y- 175)
  bpipe.moveTo(ring.x, ring.y+ 175)
  ring.move()
  bar.draw()
  score.draw()
  game.drawText( `x ${game.score}`, score.right + 5, score.y + 17, scoref)
  copter.draw(bird.x-50)
  
  
  
  //h.moveTo(score.x, 25)
  //h2.moveTo(score.x + 20, 25)
  //h3.moveTo(score.x + 40, 25)


  //game play

  if(key.pressed[key.space]){
    bird.y -= 2
    wing.play()
  }else{
    bird.y += 2 
  }

  
  if(key.pressed[key.enter]){
    copter.y -= 2
    wing.play()
  }else{
    copter.y += 2 
  }


  if(bird.collidedWith(ring)){
    game.score += 1
    ring.visible = false
    point.play()
  }
  
  if(ring.x < 0){
    ring.x = game.width + 50
    ring.y = randint(175,325)
    ring.speed += 1
    ring.visible = true
  }

  //gameover condidition
  if(bird.collidedWith(bar) || bird.collidedWith(tpipe) || bird.collidedWith(bpipe) || copter.collidedWith(bar) || copter.collidedWith(tpipe) || copter.collidedWith(bpipe) /*|| h.visible = false*/){
    hit.play()
    game.state = gameover;
  }

}

  function gameover(){
    go.draw()
    if(key.pressed[key.Y]){
      game.score = 0
      bird.x = game.width/2
      bird.y = game.height/2
      copter.x = bird.x-50
      copter.y = game.height/2
      ring.x = game.width + 50
      ring.y = randint(175,325)
      ring.speed = 2
      ring.visible = true
      game.state = main;
  }
  game.drawText( `Play Again? [Y/N]`, game.width/2 - 100, game.height - 40, scoref)
}


}