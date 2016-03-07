import expect from 'expect';
import React from 'react';

import higherOrder from '../src/higherOrder';

import MyComponent from './components/MyComponent';
import HigherOrderComponent from './components/HigherOrderComponent';
import AnotherHigherOrderComponent from './components/AnotherHigherOrderComponent';

describe("higherOrder", () => {
  it("should build a higher-order component", () => {
    const ComposedComponent = higherOrder(MyComponent)(HigherOrderComponent)

    expect(ComposedComponent.displayName)
      .toBe('HigherOrderComponent(MyComponent)');
  });

  it("should respect order of higher-order component arguments", () => {
    const FirstHigherOrderComponent = HigherOrderComponent;
    const SecondHigherOrderComponent = AnotherHigherOrderComponent;

    const ComposedComponent = higherOrder(MyComponent)(
      FirstHigherOrderComponent,
      SecondHigherOrderComponent
    );

    expect(ComposedComponent.displayName)
      .toBe('HigherOrderComponent(AnotherHigherOrderComponent(MyComponent))');
  });
});
