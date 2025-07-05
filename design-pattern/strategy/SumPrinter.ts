import SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number): number {
    const value = strategy.get(N);

    return value;
  }
}
