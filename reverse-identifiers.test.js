'use strict';

const child_process = require('child_process');
const path = require('path');
const transform = require.resolve('./reverse-identifiers');

it('transforms correctly', () => {
  const result = child_process.spawnSync(
    path.join(__dirname, 'node_modules', '.bin', 'jscodeshift'),
    [
      '--dry',
      '--print',
      '--run-in-band',
      '-t', transform,
      '--extensions=ts',
      '--parser=ts',
      path.join(__dirname, './reverse-identifiers.input.ts'),
    ],
    {
      encoding: 'utf8',
    }
  );

  expect(result.stdout).toEqual(expect.stringContaining("type yarrAemaNrOemaN = string | string[];"));
});
