class Ground
{

  constructor(x,y,width,height){
  
    var options = {

      isStatic:true,
      restitution:0,
      fricton:1
    }

    this.x = x
    this.y = y
    this.w = width
    this.h = height

    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    World.add(world,this.body)

    

    this.sp = createSprite(this.x,this.y,this.w,this.h)
     
  }
    display()
    {
      this.sp.x = this.body.position.x
      this.sp.y = this.body.position.y 
       
        this.sp.shapeColor = "red"    
    }

  }




