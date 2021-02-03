class Hexagon
{

  constructor(x,y,width,height)
  {
    var options = {

        isStatic:false,
        retitution:1,
        friction:1
    }

    this.x = x
    this.y = y
    this.w = width
    this.h = height

    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    World.add(world,this.body)

    
    var sprImage

    sprImage = loadImage("polygon.png")

    this.spr = createSprite(this.x,this.y,this.w,this.h,options)

    this.spr.addImage("sprite",sprImage)

    this.spr.scale = 0.10

  }

    display()
    {
      this.spr.x = this.body.position.x
      this.spr.y = this.body.position.y
    
    }
}
