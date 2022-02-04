/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
/**
 * Implement cached_property for typescript
 *
 * https://docs.python.org/3/library/functools.html#functools.cached_property
 * https://akoshochrein.com/posts/build-a-simple-in-memory-cache-with-typescript-decorators/
 * https://www.typescriptlang.org/docs/handbook/decorators.html#accessor-decorators
 */

// eslint-disable-next-line @typescript-eslint/ban-types
export const cached_property = (target: Object, propertyKey: string, descriptor: PropertyDescriptor): void => {
  if (!descriptor.get) {
    throw new Error('The cached_property can be used only on get accessor');
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const original = <unknown>descriptor.get as any;

  descriptor.get = (): unknown => {
    // eslint-disable-next-line no-prototype-builtins
    if (!original.hasOwnProperty('cached_property')) {
      original.cached_property = original.apply(this, []);
    }

    return original.cached_property as unknown;
  };
};
