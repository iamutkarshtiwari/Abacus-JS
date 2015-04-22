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
        
        
        },
        
        onenterframe: function()
        {
            
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
            sorobanCalculation()
        }
        
        
        
},

        updateAnimation: function()
        {
            
            for(var i=0;i<5;i++)
            {
        for(var j=0;j<15;j++)
        {
        
        // For lower-down beads    
        if(this.up==false) 
        {
        if(uparray[i][j].x==this.x && uparray[i][j].y>345 && uparray[i][j].y<this.y )
        {
            
            if(uparray[i][j].up==this.up)
            {
                
                uparray[i][j].change=1
            }
            
        }
        
        if(uparray[i][j].x==this.x && uparray[i][j].y==this.y)
           uparray[i][j].change=1
        
        
        }
        
        
        
        //For lower-up beads
        if(this.up==true)
        {
        if(uparray[i][j].x==this.x && uparray[i][j].y>this.y && uparray[i][j].y<620)
        {
         
           if(uparray[i][j].up==this.up)
           {
               //this.change=1
               uparray[i][j].change=1
           }
                
        }
        
        if(uparray[i][j].x==this.x && uparray[i][j].y==this.y)
           uparray[i][j].change=1
        
            
        }
        
        
        
        
        
        
        }
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



var uppervalue=[10000000,1000000,100000,10000,1000,100,10,1,0.1,0.01,0.001,0.0001,0.00001,0.000001,0.0000001]


var countlabel=""
var labelspace=0
var t=20
var count=0


// Soroban Calculation
var exp=["05","06","07"]
var tofix=[1,2,3,4]
   
var sorobanCalculation= function()
{       
        countlabel=""
        labelspace=0
        t=20
    
        for(var j=0;j<15;j++)
        {
            count=0
            counter=0
        for(var i=0;i<5;i++)
        {   
         
            if(uparray[i][j].up==true)
            {  
                if(uparray[i][j].y<345)
                    count+=uppervalue[j]*5
                else
                count+=uppervalue[j]
                
                if(j>7 && j<12)
                count = Number(count.toFixed(tofix[j-8]));
                console.log(count)
                    
                    
                
                
                 
                  counter++
            }
                    
        }
        
       // console.log(count)
        
        if(count>0)
        {
            
         if(j==12 || j==13 || j==14)
            count=counter.toString()+'e'+'-'+exp[j-12]
            
         else
         {
            count=count.toString()
            //console.log(count)
         }
        
        if(countlabel=="")
        {
        countlabel=countlabel+count
        
        }
        else
        {
        countlabel+="+"+count
        labelspace++
        t+=8
        
        }
        
        
        }
        
        //console.log(count)
        
        }
            
        
      
       
        
   
        sorobanlabel.text=countlabel;
        sorobanlabel.x=690-(labelspace*t)
        //if(t>14)
        
        //sorobanlabel.x=690
        sorobanlabel.y=90// Score calculation
        
        
        
        //sorobanlabel.textAlign="center"
        sorobanlabel.color="black"
        sorobanlabel.font = "35px cursive";
        game.rootScene.addChild(sorobanlabel)
}
        


var sorobanDisplay = function()
{
    game.rootScene.addChild(soroban);
        sorobanup();
        sorobanbuttonsdisplay(game.rootScene);
        game.rootScene.addChild(slider);
        game.rootScene.addChild(sorobanlabel)
}
    
        


       
