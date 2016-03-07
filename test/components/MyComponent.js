import React, { Component } from 'react';

export default class MyComponent extends Component {
  render() {
    const { styles, greeting } = this.props;

    return <div style={styles}>{greeting}</div>;
  }

}

MyComponent.displayName = 'MyComponent';
