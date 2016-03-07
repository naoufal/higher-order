import React, { Component } from 'react';

export default function HigherOrderComponent(ComposedComponent) {
  class HigherOrderComponent extends Component {
    render() {
      return (
        <div style={styles}>
          Higher Order Component (passes this.props.styles)
          <ComposedComponent {...this.props} styles={styles} />
        </div>
      );
    }
  }

  HigherOrderComponent.displayName = `HigherOrderComponent(${ComposedComponent.displayName})`;

  return HigherOrderComponent;
}

const styles = {
  marginTop: 20,
  padding: 20,
  border: '2px solid black'
}
