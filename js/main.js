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


var Slider= Class.create(Sprite, {
    
    initialize: function(x,y)
    {
        
        Sprite.call(this,23,17);
        this.image=game.assets['res/Slider.png'];
        
        this.x=x;
        this.y=y;
    },
    
    onenterframe: function() {
        
       this.addEventListener('touchmove', function(e){
    this.x = e.x;
    this.y = e.y;
});
    
    } 
    
});

   
        
    
    
        
         
//Begin game code
window.onload = function() {
    game = new Game(stgWidth, stgHeight);
    
    game.preload('res/soroban.png','res/BlackBead.png','res/WhiteBead.png','res/Slider.png');
    
    
   game.fps = 30;
    game.scale = 2;
    
    

    game.onload = function() { //Prepares the game
     
        
        var label= new Label("Hello");
        var slider=new Slider(200,170);


label.color='#f00';
label.font = "8px cursive";
//label.text="Hello";

        soroban = new soroban();
        soroban.scale(1.3,1.3);
        //w1= new whitebead(1215,205);
        //w2= new whitebead(1145,205);
        
        
       
        game.rootScene.addChild(soroban);
        sorobanup();
        sorobanbuttonsdisplay(game.rootScene);
        
        //game.rootScene.addChild(w1);
        //game.rootScene.addChild(w2);
        //game.rootScene.addChild(label);
        game.rootScene.addChild(slider);
        
        
        
        
               
      
        
        
        //Game Condition Check
        game.rootScene.addEventListener('enterframe', function() {
            //08 Game Over
            
            //08 Make Bomb Generator
        });

    }
    game.start(); //Begin the game
}