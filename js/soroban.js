enchant();

var stgWidth =1366 ;
var stgHeight =768;


// Soroban Abacus class



/*
sorobanup= Class.create(Sprite, { 
    initialize: function()
    {
        
        Sprite.call(this,955,449);
        this.image=game.assets['res/soroban.png']
        
        this.x=240;
        this.y=150;
        this.frame=0;
        
        this.tx = this.x;
        this.ty = this.y;

    },
    
    
    onenterframe: function() {
        
       /* this.x+=4;
        this.y+=4;  */
        
        // This one is for keyboard input
        
        //  This one is for mouse input
        
 /*   }});
*/
    
 
// WhiteBeads

whitebead= Class.create(Sprite, {
    initialize: function(x,y)
    {
        Sprite.call(this, 42, 31);
        this.image=game.assets['res/WhiteBead.png'];
        
        this.x=x
        this.y=y
        this.frame=1
    },
    
    onenterframe: function()
    {
        
    }
}
            );
 
 
 
 
 
 
 
 
 
       
       
// BlackBeads class


blackbead= Class.create(Sprite, {
    initialize: function(x,y)
    {
        Sprite.call(this, 43, 32);
        this.image=game.assets['res/BlackBead.png'];
        
        this.x=x
        this.y=y
        this.frame=1
    },
    
    onenterframe: function()
    {
        
    }
}
            );


       
