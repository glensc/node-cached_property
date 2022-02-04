# cached_property for Node

A `@cached_property` decorator for Node.

This package implements `@cached_property` for Node,
inspired by Python 3.8 [functools.cached_property].

[functools.cached_property]: https://docs.python.org/3/library/functools.html#functools.cached_property

# Example

```ts
class CachedPropertyTest {
  private multiplier = -1000;

  @cached_property
  public get seconds(): number {
    return Math.random() * this.multiplier;
  }

  @cached_property
  public get more_seconds(): number {
    return Math.random() * this.multiplier;
  }
}

const t = new CachedPropertyTest();

console.log(t.seconds);
console.log(t.seconds);
console.log(t.more_seconds);
```

prints:

```
-239.2518616963777
-239.2518616963777
-20.830758314434703
```
