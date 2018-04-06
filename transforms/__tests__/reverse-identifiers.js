'use strict';

const transform = require('../reverse-identifiers');
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;
const runInlineTest = require('jscodeshift/dist/testUtils').runInlineTest;

it('transforms correctly', () => {
  runInlineTest(
    transform,
    {},
    {
      path: 'source.ts',
      source: 'let foo: string = <string>"somestring"',
    },
    'let oof: string = <string>"somestring"',
  );
});
