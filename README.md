# Rollup Plugin Hashed Mapping

A [rollup] plugin that generates a `manifest.hash.json` file for your compiled assets. This is a [fork of the wonderful plugin](https://github.com/surma/rollup-plugin-entrypoint-hashmanifest) provided by [surma](https://github.com/surma).

```
$ npm i @trendyminds/rollup-plugin-hashed-mapping -D
```

## Usage

**NOTE**: Your file name format _must_ use the `[name].[hash].js` syntax. Additionally, only `.css` and `.js` assets will be added into the JSON manifest file.

```js
// rollup.config.js
import hashedMapping from "@trendyminds/rollup-plugin-hashed-mapping";

export default {
  input: "src/main.js",
  output: {
    dir: "dist",
    format: "amd",
    entryFileNames: "[name].[hash].js"
  },
  plugins: [hashedMapping()]
};
```

## Using the hashed filenames in your templates

This plugin **does not rename assets in your templating files**. This merely provides a JSON mapping of the old and the new names. You should then use this file as a [lookup table](https://en.wikipedia.org/wiki/Lookup_table). Here's an example of how this might work if you are using a server-side templating language such as Twig:

```twig
<link rel="stylesheet" href="/path/to/your/assets/{{ asset('app.css') }}">

<script src="/path/to/your/assets/{{ asset('app.js') }}"></script>
```

And your `{{ asset('') }}` function looks up the filename in the JSON manifest and fetches the hashed version.

## Options

```js
{
  // ...
  plugins: [
    hashedMapping({
      file: "manifest.hash.json"
    })
  ];
}
```
