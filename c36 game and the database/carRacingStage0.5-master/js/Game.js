class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    textSize(30)
    text("game Start!", 120, 100)
    Player.getallplayers()
    console.log(allplayers)
    if (allplayers != undefined){
      var distance = 130;
      for  (var plr in allplayers){
        if (plr == "player" + player.index){
          fill("red");
        } else{
          fill("black")
        } 
        distance = distance+20
        textSize(15)
        text(allplayers[plr].name+":"+allplayers[plr].distance, 120, distance)
    }
  }
}
}
