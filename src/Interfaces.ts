export class UltimatePoint {
  Ds: Array<number> = [];
  Score = [];
}

export interface Point {
  id: string;
  x: number;
  y: number;
  isDragging: boolean;
  thrower: boolean;
  completion: boolean;
}

export class XYPoint {
  x: number = -1;
  y: number = -1;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Target extends XYPoint {
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
  id: number = -1;
  thrower: XYPoint = new XYPoint(0, 0);
  target: Target = new Target(0, 0, false);
  type: ThrowType = ThrowType.Backhand;
  angle: ThrowAngle = ThrowAngle.Flat;

  constructor(id: number, handler: XYPoint, target: Target) {
    this.id = id;
    this.thrower = handler;
    this.target = target;
  }
}
