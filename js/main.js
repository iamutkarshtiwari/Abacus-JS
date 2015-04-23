enchant();

var stgWidth =1366 ;
var stgHeight =768;




// Slider class

var Slider= Class.create(Sprite, {
    
    initialize: function(x,y)
    {
        
        Sprite.call(this,23,17);
        this.image=game.assets['res/Slider.png'];
        
        this.x=x;
        this.y=y;
    },
    
    onenterframe: function() {
        
       this.addEventListener('touchmove', this.move);
    
    } ,
    
    move: function(e)
    {
    this.tx = e.x-23;
    this.ty = e.y-17;
    
    }
    
});

   
        
    
    
        
         
//Begin game code
window.onload = function() {
    game = new Game(stgWidth, stgHeight);
    
    game.preload('res/soroban.png','icon/soroban.png','res/BlackBead.png','res/WhiteBead.png','res/Slider.png');
    
    
   game.fps = 30;
    game.scale = 1;
   
    

    game.onload = function() { //Prepares the game
     
        
        
        slider=new Slider(200,170);
         
        sorobanswitch=new sorobanswitch();
        
        

        soroban = new soroban();
        soroban.scale(1.3,1.3);
       
      
        
         sorobanlabel=new Label("")
        
        
        
        
       
        
        
        
        game.rootScene.addChild(sorobanswitch)
        
      game.rootScene.addEventListener('enterframe', function() {
           
          if(abacusswitch==1)
          {
              
              
              // function to call soroban abacus
        sorobanDisplay(game.rootScene);
        
        abacusswitch=0
          }
          
        });

    }
    game.start(); //Begin the game
}