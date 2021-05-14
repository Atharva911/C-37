var hypnoticBall, database;
var position;
var playerCount =0
var gameState = 0
var player
var form 
var allplayers
var game

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
    
  if(playerCount===4){
    game.updateState(1)
  }


  if(gameState===1){
    game.play()
  }







}
