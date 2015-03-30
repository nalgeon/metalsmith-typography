
# metalsmith-typography

  A Metalsmith plugin to enhance typography in HTML — hanging punctuation, abbreviations, quotes and dashes. Uses [Richtypo.js](https://github.com/sapegin/richtypo.js).

## Installation

    $ npm install metalsmith-typography

## CLI Usage

  Install via npm and then add the `metalsmith-typography` key to your `metalsmith.json` plugins with `lang` option (`en` and `ru` supported, `en` is the default):

```json
{
  "plugins": {
    "metalsmith-typography": {
      "lang": "en"
    }
  }
}
```

## Javascript Usage

  Pass `options` to the typography plugin and pass it to Metalsmith with the `use` method:

```js
var typography = require('metalsmith-typography');

metalsmith.use(typography({
  lang: "en"
}));
```

  Call it after the `metalsmith-markdown` plugin, so that HTML files are available.

## License

  MIT