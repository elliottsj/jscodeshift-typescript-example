# jscodeshift-typescript-example
Example of using jscodeshift with TypeScript.

### Usage
First install:
```shell
npm install
```

Try the [reverse-identifiers](reverse-identifiers.js) transform:
```shell
./node_modules/.bin/jscodeshift -t ./reverse-identifiers.js --extensions ts ./reverse-identifiers.input.ts --print
```

_Omit `--print` to write the transformed source back to disk._

### Test
```shell
npm test
```
