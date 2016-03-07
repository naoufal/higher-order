function buildComposedComponent(prevValue, currentValue) {
  return currentValue(prevValue);
}

export default function higherOrder(Component) {
  return function compose(...HigherOrderComponents) {
    const chain = [Component, ...HigherOrderComponents.reverse()];
    const composedComponent = chain.reduce(buildComposedComponent);

    return composedComponent;
  };
}
