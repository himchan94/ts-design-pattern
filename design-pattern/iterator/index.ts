import Array from "./array";
import Item from "./item"

const items = [
    new Item("쿠쿠다스", 2500),
    new Item("몽쉘", 500),
    new Item("쿠키", 1500),
    new Item("통밀식빵", 10500)
]

const array = new Array(items);
const iter = array.iterator();

while (iter.next()){
  const item = iter.current();
  console.log(item);
}