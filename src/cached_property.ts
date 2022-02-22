/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
/**
 * Implement cached_property for typescript
 *
 * https://docs.python.org/3/library/functools.html#functools.cached_property
 * https://akoshochrein.com/posts/build-a-simple-in-memory-cache-with-typescript-decorators/
 * https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
 * https://www.digitalocean.com/community/tutorials/how-to-use-decorators-in-typescript
 */

export const cached_property = (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
  if (!descriptor.get) {
    throw new Error('The cached_property can be used only on get accessor');
  }

  const original = (descriptor as any).get;

  const resolve = (cache: any, obj: any): any => {
    cache.cache = original.apply(obj, []);
    cache.cached = true;

    return cache.cache;
  };

  return {
    get(): any {
      const symbol = `@cached_property#${propertyKey}`;
      this[symbol] ||= {
        cached: false,
        cache: null,
      };
      const cache = this[symbol];

      return cache.cached ? cache.cache : resolve(cache, this);
    },
  };
};
