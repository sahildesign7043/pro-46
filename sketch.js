const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;



var world,engine;

var player1,player2;
var enemy1,enemy2,enemy3,enemy4;
var player1IMG,player2IMG;
var enemy1IMG,enemy2IMG, enemy3IMG, enemy4IMG;
var weapons,weapomsIMG;
var ground;



function preload(){
enemy1IMG=loadImage("enemy1.jpg");
enemyIMG2=loadImage("enemy2.jpg");
enemyIMG3=loadImage("enemy3.jpg");
enemyIMG4=loadImage("enemy4.jpg");
weaponsIMG=loadImage("weapons.jpg");
player1IMG=loadImage("player1.jpg");
player2IMG=loadImage("player2.jpg");


}


//box1 = new Box(700,320,70,70);


function setup(){
createCanvas(1200,600);
enemy1=new enemy(10,10,10,10);
enemy2=new enemy(10,10,10,10);
enemy3=new enemy(10,10,10,10);
enemy4=new enemy(10,10,10,10);
player1=new player(10,10,10,10);
player2=new player(10,10,10,10);
weapons=new weapons(10,10,10,10);33


engine=Engine.create();
world=engine.world;
enemy1.addImage(enemy1IMG);
enemy2.addImage(enemy2IMG);
enemy3.addImage(enemy3IMG);
enemy4.addImage(enemy4IMG);
weapons.addImage(weaponsIMG);
player1.addImage(player1IMG);
player2.addImage(player2IMG);




}
function draw(){


enemy1.display();
enemy2.display();
enemy3.display();
enemy4.display();
weapons.display();
player1.display();
player2.display();

engine=Engine.update();
}