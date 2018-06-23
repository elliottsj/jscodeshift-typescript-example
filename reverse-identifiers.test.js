'use strict';

const fs = require('fs');
const jscodeshift = require('jscodeshift');
const path = require('path');
const transform = require('./reverse-identifiers');

it('transforms correctly', () => {
  const inputPath = path.resolve(__dirname, 'reverse-identifiers.input.ts');
  const file = {
    path: inputPath,
    source: fs.readFileSync(inputPath, 'utf8'),
  }
  const output = transform(file, {
    jscodeshift,
    stats: () => {},
  });

  expect(output).toMatchSnapshot();
});
