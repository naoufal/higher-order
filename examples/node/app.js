const express = require('express');
const app = express();

const React = require('react');
const renderToString = require('react-dom/server').renderToString;

const ComposedComponent = require('./components/ComposedComponent').default;

app.get('/', (req, res) => {
  const html = renderToString(<ComposedComponent />);

  res.write(html);
});

const port = 5050;
app.listen(port, () => {
  console.log('App listeninig on port', port);
})
