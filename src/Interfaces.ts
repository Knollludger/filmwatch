export class UltimatePoint {
  Ds: Array<number> = [];
  Score = [];
}

export class Point {
  x: number = -1;
  y: number = -1;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Target extends Point {
  completion: boolean = true;
  // for if I ever track more than scores and Ds.
  score: boolean = true;
  constructor(x: number, y: number, completion: boolean) {
    super(x, y);
    this.completion = completion;
    this.score = completion;
  }
}

enum ThrowType {
  Backhand,
  Forehand,
  Hammer,
  Scoober,
  PushPass,
}

enum ThrowAngle {
  Flat,
  OI,
  IO,
  NA,
}
export class Throw {
  thrower: Point = new Point(0, 0);
  target: Target = new Target(0, 0, false);
  type: ThrowType = ThrowType.Backhand;
  angle: ThrowAngle = ThrowAngle.Flat;

  constructor(handler: Point, target: Target) {
    this.thrower = handler;
    this.target = target;
  }
}
