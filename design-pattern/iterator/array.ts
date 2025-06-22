import Aggregator from "./aggregator";
import Item from "./item"
import Iterator from "./iterator";
import ArrayIterator from "./arrayIterator";

class Array implements  Aggregator<Item>{
  // private items: Item[];

  constructor(private items: Item[]) {
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }
}

export default Array;