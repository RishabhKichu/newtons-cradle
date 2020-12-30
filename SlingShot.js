class Rope {
  constructor(b1, b2, o1, o2) {
    this.o1 = o1;
    this.o2 = o2;
    var options = {
      bodyA: b1,
      bodyB: b2,
      pointB: { x: this.o1, y: this.o2 },
      stiffness: 0.6,
      length: 240,
      Bounce: 1,
    };
    this.constaint = Constraint.create(options);
    World.add(world, this.constaint);
  }

  display() {
    push();
    var body1 = this.constaint.bodyA.position;
    var body2 = this.constaint.pointB;
    strokeWeight(2);

    fill("white");
    line(body1.x, body1.y, this.o1, this.o2);
    pop();
  }
}
