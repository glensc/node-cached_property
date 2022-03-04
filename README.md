# cached_property for Node

A `@cached_property` decorator for Node.

This package implements `@cached_property` for Node,
inspired by Python 3.8 [functools.cached_property].

The package also includes TypeScript typing.

[functools.cached_property]: https://docs.python.org/3/library/functools.html#functools.cached_property

# Usage

```shell
yarn add cached_property
```

```ts
import { cached_property } from "cached_property";
```

# Example

```ts
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
```

prints:

```
t1 CachedPropertyTest { multiplier: -744.8363910755569 }
t2 CachedPropertyTest { multiplier: -740.5825190870856 }
-577.7473504371724
-577.7473504371724
-377.27881344400447
-139.17929406315005
-139.17929406315005
-648.857438477043
```
