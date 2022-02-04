/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Implement cached_property for typescript
 *
 * https://docs.python.org/3/library/functools.html#functools.cached_property
 * https://akoshochrein.com/posts/build-a-simple-in-memory-cache-with-typescript-decorators/
 * https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
 */

export const cached_property = (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
  if (!descriptor.get) {
    throw new Error('The cached_property can be used only on get accessor');
  }

  const original = (descriptor as any).get;
  let cached = false;
  let cache: any = null;

  const resolve = (obj: any): any => {
    cache = original.apply(obj, []);
    cached = true;

    return cache;
  };

  return {
    get(): any {
      return cached ? cache : resolve(this);
    },
  };
};
