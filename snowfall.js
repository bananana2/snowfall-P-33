class Snow{
	constructor(x,y)
	{

	var options = {
		resolution:0,
		friction: 0.2,
		density: 0.5
	}
		
		this.width = 30;
		this.height = 30;
		this.body=Bodies.rectangle(x,y,this.width, this.height, options);
		this.x=x;
		this.y=y;
		this.image = loadImage("snow4.webp")
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.width,this.height);

			pop()
	}

}