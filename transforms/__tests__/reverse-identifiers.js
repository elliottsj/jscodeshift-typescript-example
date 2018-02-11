'use strict';

const transform = require('../reverse-identifiers');
const defineInlineTest = require('jscodeshift/dist/testUtils').defineInlineTest;

defineInlineTest(
  transform,
  {},
  'let foo: string = ""',
  'let oof: string = ""'
);
