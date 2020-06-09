function ztg(){

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
  setTimeout(gameloop,10);
}

// Create game objects and perform any game initialization
function init(){
  bk = new Sprite(game.images.bk, game)
  bk.scale = 0.5
  turkey = new Sprite(game.images.turkey, game)
  turkey.scale = 0.4
  turkey.setVector(2,45)
  zombie = new Sprite(game.images.zombie, game)
  zombie.scale = 0.15
  zombie.setVector(2,-45)
  crosshair = new Sprite(game.images.crosshair, game)
  crosshair.scale = 0.3
  logo = new Sprite(game.images.logo, game)
  f = new Font ("30pt" , "Quicksand" , "white", "black")
  pew = new Sound(game.audios.pew)
  gobble = new Sound(game.audios.gobble)
  chomp = new Sound(game.audios.chomp)
  oof = new Sound(game.audios.oof)
  bk_two = new Sprite(game.images.bk_two, game)
  bk_two.scale = 1.5
  
  game.state = startScreen;
}

function startScreen(){
  bk.draw()
  logo.draw()
  game.drawText("Click Here to Start", game.width / 2 - 190, game.height - 170,f)
  if(mouse.leftClick){
    game.state = back;
  }
}



//background 
function back(){
  bk_two.draw()
  game.drawText("It was year 1999 in Turkeyopolis", game.width / 2 - 290, game.height - 500,f)
  if(mouse.leftClick){
    game.state = back_two
  
}
}

function back_two(){
  bk_two.draw()
  game.drawText("It was year 1999 in Turkeyopolis", game.width / 2 - 290, game.height - 500,f)
  game.drawText("Around 200 years ago when the Zombies attacked", game.width / 2 - 275, game.height - 400,f)
  game.drawText("Thanksgiving is not the same without a turkey", game.width / 2 - 400, game.height - 350,f)

  if(mouse.leftClick){
    game.state = back_three
}
}

function back_three(){
  bk_two.draw()
  game.drawText("It was year 1999 in Turkeyopolis", game.width / 2 - 290, game.height - 500,f)
  game.drawText("Around 200 years ago when the Zombies attacked", game.width / 2 - 275, game.height - 400,f)
  game.drawText("Thanksgiving is not the same without a turkey", game.width / 2 - 400, game.height - 350,f)
  game.drawText("Please save the turkey", game.width / 2 - 380, game.height - 200,f)
  game.drawText("so we can kill and eat it!!!.", game.width / 2 - 380, game.height - 150,f)


  if(mouse.leftClick){
    game.state = how_to_play
}
}

function how_to_play(){
  bk_two.draw()
  game.drawText("Move the Mouse cursor", game.width / 2 - 290, game.height - 500,f)
  game.drawText("to move the crosshair", game.width / 2 - 275, game.height - 400,f)
  game.drawText("Press Left Mouse Button to shoot", game.width / 2 - 400, game.height - 350,f)



  if(mouse.leftClick){
    game.state = main
}
}

// Game logic
function main(){
  bk.draw()
  turkey.move(true)
  zombie.move(true)
  crosshair.moveTo(mouse.x, mouse.y)
  if(zombie.collidedWith(turkey)){
    turkey.health -= 10
    chomp.play()
    gobble.play()
    turkey.moveTo(randint(100,860), randint(100,500))
  }
  game.drawText(turkey.health, turkey.x, turkey.y + 100, f) 
   if(zombie.collidedWith(mouse) && mouse.leftClick){
    oof.play()
    zombie.health -= 10
    zombie.speed += .35
    zombie.moveTo(randint(100,860), randint(100,500))
  }
  if(mouse.leftClick){
    pew.play()
  }
  game.drawText(zombie.health, zombie.x, zombie.y + 120, f) 
  if(turkey.health <= 0 || zombie.health <= 0){
    game.state = main2;
    
  }

}


function main2(){
  bk.draw()
  turkey.move(true)
  zombie.move(true)
  crosshair.moveTo(mouse.x, mouse.y)

  if(zombie.collidedWith(turkey)){
    turkey.health -= 10
    chomp.play()
    gobble.play()
    turkey.moveTo(randint(100,860), randint(100,500))
  }
  game.drawText(turkey.health, turkey.x, turkey.y + 100, f) 
   if(zombie.collidedWith(mouse) && mouse.leftClick){
    oof.play()
    zombie.health -= 10
    zombie.speed += .35
    zombie.scale -= .001
    zombie.moveTo(randint(100,860), randint(100,500))
  }
  if(mouse.leftClick){
    pew.play()
  }
  game.drawText(zombie.health, zombie.x, zombie.y + 120, f) 
  if(turkey.health <= 0 || zombie.health <= 0){
    game.state = gameOver;
    
  }

}


function gameOver(){
  bk.draw()
  game.drawText("Game Over", game.width / 2 - 200 ,game.height / 2, new Font("70pt", "Arial", "white", "black"))
  if(turkey.health < 0){
     game.drawText("You Lose", game.width / 2 - 55 ,game.height / 2 + 100, new Font("70pt", "Arial", "red", "black"))
  } else{
    game.drawText("You Win", game.width / 2 - 55 ,game.height / 2 + 100, new Font("70pt", "Arial", "green", "black"))
  }
  


}
}