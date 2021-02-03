class Block
{

    constructor(x,y,width,height,mycolor){
     
        var options = {

            isStatic:false,
            restitution:0,
            friction:1

        }
      

        this.x = x
        this.y = y
        this.w = width
        this.h = height

        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
        World.add(world,this.body)

        //this.sprite = createSprite(this.x,this.y,this.w,this.h)

        //this.sprite.shapeColor = mycolor

        this.image = loadImage("yellow-block.png")

        //this.sprite.addImage("yellow",image)

        this.fade = false

        this.Visibility = 255;
         
      }

        display()  
        {
          //console.log("Visibilty: " + this.Visibility)
          if(this.fade == true) {
            this.Visibility = this.Visibility - 5
            World.remove(world,this.body)
          }

          push()
            tint(255,this.Visibility)
            imageMode(CENTER)
            image(this.image, this.body.position.x, this.body.position.y, 30, 40)
          pop()

          if (this.body.speed > 3) {
            this.fade = true

            console.log("Fading")
          }      
 

        }
        
}

