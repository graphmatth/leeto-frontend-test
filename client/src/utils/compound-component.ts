export function compoundComponent<T extends object, P>(
    component: T,
    subcomponents: P
  ): T & P {
    return Object.assign(component, subcomponents);
  }
  