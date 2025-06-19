export class TestContext<Context> {
  context: Context;
  latestResponse: unknown;
  latestRequestDto: unknown;

  constructor() {
    this.context = {} as any;
  }
} 