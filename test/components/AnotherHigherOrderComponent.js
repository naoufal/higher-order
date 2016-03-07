import React, { Component } from 'react';

export default function AnotherHigherOrderComponent(ComposedComponent) {
  class AnotherHigherOrderComponent extends Component {
    render() {
      return (
        <div style={this.props.styles}>
          Another Higher Order Component (passes this.props.greeting)
          <ComposedComponent {...this.props} greeting="Hi there!" />
        </div>
      );
    }
  }

  AnotherHigherOrderComponent.displayName = `AnotherHigherOrderComponent(${ComposedComponent.displayName})`;
  return AnotherHigherOrderComponent;

}
