/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */

import { cached_property } from '../src/util/cached_property';

class CachedPropertyTest {
  private multiplier = -1000;

  @cached_property
  public get seconds(): number {
    return Math.random() * this.multiplier;
  }
}

const t = new CachedPropertyTest();

console.log(t.seconds);
console.log(t.seconds);
