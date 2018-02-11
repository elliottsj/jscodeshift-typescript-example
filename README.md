# jscodeshift-transforms
A collection of jscodeshift transforms

Includes transforms for TypeScript.

### Usage
First install:
```shell
npm install
```

Transforms are in [transforms/](transforms). Run a transform on your code:
```shell
./node_modules/.bin/jscodeshift -t ./transforms/reverse-identifiers.js --dry --extensions js,ts ../path/to/your/code
```

Omit `--dry` to write transformed code to disk. See `./node_modules/.bin/jscodeshift --help` for all options.

### Test
```shell
npm test
```
