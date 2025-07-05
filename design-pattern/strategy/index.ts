import SumPrinter from "./SumPrinter";
import LoopSumStrategy from "./LoopSumStrategy";
import GaussSumStrategy from "./GaussSumStrategy";
const printer = new SumPrinter();

console.log(printer.print(new LoopSumStrategy(), 100));
console.log(printer.print(new GaussSumStrategy(), 100));
