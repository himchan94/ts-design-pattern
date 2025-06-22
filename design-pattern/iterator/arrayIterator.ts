import Iterator from "./iterator";
import Item from "./item";
import Array from "./array";

class ArrayIterator implements Iterator<Item> {
  private array: Array;
  private index: number;

  constructor(array: Array) {
    this.array = array;
    this.index = -1;
  }

  current(): Item {
    return this.array.getItem(this.index);
  }

  next(): boolean {
    this.index++;
    return this.index < this.array.count;
  }
}
export default ArrayIterator