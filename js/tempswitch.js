enchant();

var stgWidth =1366 ;
var stgHeight =768;


// Soroban Abacus class

sorobanswitch= Class.create(Sprite, { 
    initialize: function()
    {
        
        Sprite.call(this,45,45);
        this.image=game.assets['icons/soroban.svg']
        
        this.x=40;
        this.y=200;
        this.frame=0;
        
        this.tx = this.x;
        this.ty = this.y;
        
        
        },
        
        onenterframe: function()
        {
            
            this.addEventListener(Event.TOUCH_END, this.updateValue);
            
            
        },
        
        updateValue: function()
        {
          abacusswitch=1
        }
          
            
    
});




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
            sorobanCalculation()
        }
        
        
        
},

        updateAnimation: function()
        {
            
            for(var i=0;i<5;i++)
            {
        for(var j=0;j<15;j++)
        {
        
        // For down beads    
        if(this.up==false)        
        if(uparray[i][j].x==this.x && uparray[i][j].y>345 && uparray[i][j].y<=this.y )
        {
            
            if(uparray[i][j].up==this.up)
                uparray[i][j].change=1
            
            
        }
        
        //For upper beads
        if(this.up==true)
        if(uparray[i][j].x==this.x && uparray[i][j].y>=this.y && uparray[i][j].y<620)
        {
         
           if(uparray[i][j].up==this.up)
                uparray[i][j].change=1
                
        }
                
        }
        }
     
        
     }
            
            
            
     });
 
 
 
 
 
 
 
 
 
       
    
        



       
