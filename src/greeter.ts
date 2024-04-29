class Greeter {
  /**
   * あいさつをする
   * @param to あいさつをする相手
   */
  hello(to: string): void {
    const name = to;
    console.log(`こんにちは ${name} さん`);
  }
}

export { Greeter };
