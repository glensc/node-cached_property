/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import { cached_property } from '../src';

class CachedPropertyTest {
  private readonly multiplier: number;

  constructor() {
    this.multiplier = -Math.random() * 1000;
  }

  @cached_property
  public get seconds(): number {
    return Math.random() * this.multiplier;
  }

  @cached_property
  public get more_seconds(): number {
    return Math.random() * this.multiplier;
  }
}

const t1 = new CachedPropertyTest();
const t2 = new CachedPropertyTest();

console.log('t1', t1)
console.log('t2', t2)

console.log(t1.seconds);
console.log(t1.seconds);
console.log(t1.more_seconds);

console.log(t2.seconds);
console.log(t2.seconds);
console.log(t2.more_seconds);
