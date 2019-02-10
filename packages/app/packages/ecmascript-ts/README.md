# Babel TypeScript Compiler for Meteor

This package allows Meteor to compile TypeScript files with Babel.

## Usage

`lmachens:ecmascript-ts` will register a new compiler for `.ts` and `.tsx` files. It uses the same BabelCompiler `ecmascript` package is using.

```bash
meteor add lmachens:ecmascript-ts

meteor npm install --save-dev @babel/preset-typescript
```

Make sure your .babelrc has the `@babel/preset-typescript` preset:

```json
{
    "presets": [
        "@babel/env",
        "@babel/preset-typescript"
    ]
}
```

Meteor will now compile `.ts` and `.tsx` files with the babel compiler.
Note that Babel will not perform type-checking on Typescript code.
You still need TypeScript to read from `.d.ts` files.
This can be done by a separate `tsc --watch` task or in some tests.

```bash
meteor npm install --save-dev typescript
```

Add these scripts to your package.json:

```json
{
  "scripts": {
    "test-types": "tsc",
    "watch-types": "tsc --watch"
  }
}
```

## Meteor type definitions

It is recommended to install Meteor type definitions:

```bash
meteor npm install --save-dev @types/meteor
```

## How does it work?

There is a [good article](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/) which describes how Babel and TypeScript works together. 
And there is a discussion in the [meteor-feature-requests](https://github.com/meteor/meteor-feature-requests/issues/285).