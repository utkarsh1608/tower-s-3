class Box {

    constructor(x, y) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density: 0.02,

        }

        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.Visibility = 255;

        //NameSpacing(renaming width and height)......
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
    }

    score() {

        if (this.Visibility < 0 && this.Visibility > -105) {

            score++


        }
    }


    display() {

        if (this.body.speed < 3) {
            //NameSpacing(renaming position of Ground)

            var pos = this.body.position;
            var angle = this.body.angle;
            push()

            translate(pos.x, pos.y)
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(2);
            fill("blue");
            rect(0, 0, this.width, this.height);

            pop()

        }

        else {

            World.remove(world, this.body);

            push();

            this.Visibility = this.Visibility - 5;

            tint(255, this.Visibility);

            pop()

        }

    }
}
