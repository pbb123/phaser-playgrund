//alert("Hello world")
var game=new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload,update:update,create:create})
var player;
function preload()
{
	game.load.image('asset','asset.png')

}
function create()
{
	player=game.add.sprite(100,100,'asset')
}
function update()
{
	
}