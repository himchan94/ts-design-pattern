class Item {
  // private _name: string;
  // private _cost: number;
  //
  // constructor(name: string, cost: number) {
  //   this._name = name;
  //   this._cost = cost;
  // }

  constructor(private  _name:string, private  _cost:number) {}

  get name() {
    return this._name;
  }

  get cost() {
    return this._cost;
  }
}

export default Item;