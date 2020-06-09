// Specifies resources
let resources = {images:[
                          {id:"day", src:"images/day.png"},
                          {id:"bird", src:"images/bird.png"},
                          {id:"bar", src:"images/bar.png"},
                          {id:"ring", src:"images/ring2.png"},
                          {id:"tpipe", src:"images/pipe_top.png"},
                          {id:"bpipe", src:"images/pipe_bot.png"},
                          {id:"go", src:"images/flappybird_end.png"},
                          {id:"score", src:"images/ring2.png"},
                          {id:"logo", src:"images/logo.png"},
                          {id:"night", src:"images/night.png"},
                          {id:"arcade", src:"images/arcade.jpg"},
                          {id:"logo1", src:"images/logo1.png"},
                          {id:"play", src:"images/play.png"},
                          {id:"htp", src:"images/htp.png"},
                          {id:"about", src:"images/about.png"},
                          {id:"back", src:"images/back.png"},
                          {id:"duos", src:"images/duosfb.png"},
                          {id:"copter", src:"images/copter.png"},
                          {id:"bk", src: "images/Zbk.jpg"}, 
                          {id:"turkey", src: "images/turkey.gif"},
                          {id:"zombie", src: "images/zombie.png"},
                          {id:"crosshair", src: "images/crosshair.png"},
                          {id:"logo", src: "images/logoztg.png"},
                          {id:"bk_two", src: "images/bk_two.jpg"}

                  ],
                 audios:[
                          
                          {id:"hit", src:"audios/hit.ogg"},
                          {id:"point", src:"audios/point.ogg"},
                          {id:"wing", src:"audios/wing.ogg"},
                          {id:"pew", src: "audios/Gun.wav"},
                          {id:"gobble", src: "audios/TurkeyGobble.wav"},
                          {id:"chomp", src: "audios/ZombieChomp.wav"},
                          {id:"oof", src: "audios/ZombieDie.wav"}
                  ]
                };

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
  arcade = new Sprite(game.images.arcade, game)
  arcade.scale = 0.5
  game.setBackground(arcade)
  
  //gameover image
  go = new Sprite(game.images.go, game)

  //logo
  logo1 = new Sprite(game.images.logo1, game)
  logo1.y -= 150
  logo1.scale = .7

  // fb logo 
  logo = new Sprite(game.images.logo, game)
  duos = new Sprite(game.images.duos, game)
  duos.y = 475
  duos.x = 665
  
  //play
  play = new Sprite(game.images.play, game)
  play.y = 300

  //how to play
  htp = new Sprite(game.images.htp, game)
  htp.y = 400
  htp.scale = 1

  //about
  about = new Sprite(game.images.about, game)
  about.y = 200
  about.scale = .7

  //back
  back = new Sprite(game.images.back, game)
  back.scale = .2


  game.state = startscreen;
}

function startscreen(){
    game.drawBackground()

    logo1.draw()
    about.draw()
    play.draw()
    htp.draw()
    
    if(play.collidedWith(mouse) && mouse.leftClick ){
      game.state = game_selection;
 
    }
    if(htp.collidedWith(mouse) && mouse.leftClick){

      game.state = htp;

    }
  
 }

 function game_selection(){

   game.drawBackground()
   logo1.draw()
   logo1.y = 100

   logo.draw()
   logoztg.draw()
   logoztg.y = 200
   
   back.draw()
   back.y = 450
   back.x = 80

   if (logoztg.collidedWith(mouse) && mouse.leftClick){

    game.state = ztg

   }

   if (logo.collidedWith(mouse) && mouse.leftClick){

   game.state = flappybird_menu

   }

   if(back.collidedWith(mouse) && mouse.leftClick){

    game.state = startscreen

 }
 }

function flappybird_menu(){

  game.drawBackground()
  logo1.draw()
  logo.draw()
  duos.draw()
  back.draw()

  if(logo.collidedWith(mouse) && mouse.leftClick){

    game.state = flappybird

}
   if(duos.collidedWith(mouse) && mouse.leftClick){

    game.state = fbduos
   }

    if(back.collidedWith(mouse) && mouse.leftClick){

    game.state = game_selection


}
}


