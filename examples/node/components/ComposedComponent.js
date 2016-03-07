import React, { Component } from 'react';
import higherOrder from 'higher-order';

import HigherOrderComponent from '../../../test/components/HigherOrderComponent';
import AnotherHigherOrderComponent from '../../../test/components/AnotherHigherOrderComponent';

class MyComponent extends Component {
  render() {
    const { styles, greeting } = this.props;

    return <div style={styles}>{greeting}</div>;
  }
}

export default higherOrder(MyComponent)(HigherOrderComponent, AnotherHigherOrderComponent);
