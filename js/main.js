enchant();

var stgWidth =1366 ;
var stgHeight =768;


// Soroban Abacus class

soroban= Class.create(Sprite, { 
    initialize: function()
    {
        
        Sprite.call(this,955,449);
        this.image=game.assets['res/soroban.png']
        
        this.x=240;
        this.y=200;
        this.frame=0;
        
        this.tx = this.x;
        this.ty = this.y;

    }
    
});
   
        
    
    
        
         
//Begin game code
window.onload = function() {
    game = new Game(stgWidth, stgHeight);
    
    game.preload('res/soroban.png','res/BlackBead.png','res/WhiteBead.png');
    
    
   game.fps = 30;
    game.scale = 2;
    
    

    game.onload = function() { //Prepares the game
     
        soroban = new soroban();
        soroban.scale(1.3,1.3);
        w1= new whitebead(1215,205);
        w2= new whitebead(1145,205);
        
        
       
        game.rootScene.addChild(soroban);
        game.rootScene.addChild(w1);
        game.rootScene.addChild(w2);
        
               
      
        
        
        //Game Condition Check
        game.rootScene.addEventListener('enterframe', function() {
            //08 Game Over
            
            //08 Make Bomb Generator
        });

    }
    game.start(); //Begin the game
}