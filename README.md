# Higher Order
[![npm](https://img.shields.io/npm/v/higher-order.svg?style=flat-square)](https://www.npmjs.com/package/unsplash-js)
[![Travis](https://img.shields.io/travis/naoufal/higher-order/master.svg?style=flat-square)](https://travis-ci.org/naoufal/unsplash-js/branches)
[![Coveralls](https://img.shields.io/coveralls/naoufal/higher-order/master.svg?style=flat-square)](https://coveralls.io/github/naoufal/unsplash-js?branch=master)

A simple JavaScript utility for composing higher-order components.

## Documentation
- [Installation](https://github.com/naoufal/higher-order#installation)
- [Usage](https://github.com/naoufal/higher-order#usage)
- [Why](https://github.com/naoufal/higher-order#why)
- [License](https://github.com/naoufal/higher-order#license)

## Installation
```bash
$ npm i --save higher-order
```

## Usage
#### Simple
Here's a simple example to get you started.
```js
import React, { Component } from 'react';
import higherOrder from 'higher-order';
import SomeHigherOrderComponent from './path/to/some-higher-order-component';

class MyComponent extends Component {
  // ...
}

export default higherOrder(MyComponent)(SomeHigherOrderComponent);
```

#### Ordering higher-order components
There are times where the order in which you compose your higher-over components matters.  Higher Order composes your higher-order components in the reversed order that they are provided.

```js
import React, { Component } from 'react';
import higherOrder from 'higher-order';
import {
  FirstHigherOrder,
  SecondHigherOrder,
  ThirdHigherOrder
} from './path/to/higher-order-components';

class MyComponent extends Component {
  // ...
}

export default higherOrder(MyComponent)(
  FirstHigherOrder,
  SecondHigherOrder,
  ThirdHigherOrder
);
```
This export translates to:

```js
export default FirstHigherOrder(
  SecondHigherOrder(
    ThirdHigherOrderComponent(MyComponent)
  )
);
```

#### Redux
Higher Order and Redux play nicely together too.
```js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import higherOrder from 'higher-order';
import SomeHigherOrderComponent from './path/to/some-higher-order-component';
import { mapStateToProps } from 'path/to/helpers';

class MyApp extends Component {
  // ...
}

export default higherOrder(MyApp)(
  connect(mapStateToProps),
  SomeHigherOrderComponent
);
```

## Why
If you've ever composed multiple Higher-order components then you've probably found yourself deeply nesting — I like to call this *The Higher Order Pyramid of Doom*.

```js
export default FirstHigherOrder(
  SecondHigherOrder(
    ThirdHigherOrderComponent(MyComponent)
  )
);
```

Higher Order solves this by providing more readable interface for higher-order component compositions.

## License
Copyright (c) 2015, [Naoufal Kadhom](http://naoufal.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
