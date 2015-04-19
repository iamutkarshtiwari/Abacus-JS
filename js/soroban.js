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


// buttons coordinate set
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
        this.up=false;
        this.change=0
        
    },
    
     onenterframe: function() {
        
        this.animationDuration = 0;
        this.addEventListener(Event.TOUCH_END, this.updateAnimation);
        
        if(this.change==1)
        {
        if(this.y<345)
                if(this.up==false)
                {
                    this.y+=100;
                    this.up=true;
                }
                else
                {
                    this.y-=100;
                    this.up=false;
                }
            else
                if(this.up==false)
                {
                    this.y-=136;
                    this.up=true;
                }
                else
                {
                    this.y+=136;
                    this.up=false;
                }
        
            this.change=0;
        }
        
},

        updateAnimation: function()
        {
            
            for(var i=0;i<5;i++)
            {
        for(var j=0;j<15;j++)
        {
            
        if(this.up==0)        
        if(uparray[i][j].x==this.x && uparray[i][j].y>345 && uparray[i][j].y<this.y )
        {
            
            if(uparray[i][j].up==this.up)
                uparray[i][j].change=1
            
            
        }
        
        if(this.up==1)
        if(uparray[i][j].x==this.x && uparray[i][j].y>this.y && uparray[i][j].y<620)
        {
         
           if(uparray[i][j].up==this.up)
                uparray[i][j].change=1
                
        }
                
        }
        }
                
                
        
        
     
            if(this.y<345)
                if(this.up==0)
                {
                    this.y+=100;
                    this.up=true;
                }
                else
                {
                    this.y-=100;
                    this.up=false;
                }
            else
                if(this.up==false)
                {
                    this.y-=136;
                    this.up=true;
                }
                else
                {
                    this.y+=136;
                    this.up=false;
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


       
