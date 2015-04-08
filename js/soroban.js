enchant();

var stgWidth =1366 ;
var stgHeight =768;


// Soroban Abacus class



var x_coordinates=[184,258,332,406,478,553,627,701,774,848,922,996,1068,1142,1215];

var y_coordinates=[205,516,549,582,615];



// buttons setup
var sorobanup= function()
{
    
    uparray=[];
    
    
    for(var i=0;i<5;i++)
    {
        temp=[];
        for(var j=0;j<15;j++)
        {
            temp.push(new whitebead(x_coordinates[j],y_coordinates[i]));
        }
        uparray.push(temp);
    }
}


    
    
//buttons display    

var sorobanbuttonsdisplay=function()
{
    for(var i=0;i<5;i++)
    {   
        for( var j=0; j<15;j++)
        {
       game.rootScene.addChild(uparray[i][j]);
    }
    }
}
                                  
                                  
 
// WhiteBeads

whitebead= Class.create(Sprite, {
    initialize: function(x,y)
    {
        Sprite.call(this, 42, 31);
        this.image=game.assets['res/WhiteBead.png'];
        
        this.x=x
        this.y=y
        this.up=0;
        
    },
    
     onenterframe: function() {
        
        this.animationDuration = 0;
        this.addEventListener(Event.TOUCH_END, this.updateAnimation);
        
},

        updateAnimation: function()
        {
            
            if(this.y<345)
                if(this.up==0)
                {
                    this.y+=100;
                    this.up=1;
                }
                else
                {
                    this.y-=100;
                    this.up=0;
                }
            else
                if(this.up==0)
                {
                    this.y-=136;
                    this.up=1;
                }
                else
                {
                    this.y+=136;
                    this.up=0;
                }
            
        }
            
            
            
     });
 
 
 
 
 
 
 
 
 
       
       
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


       
