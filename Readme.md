
# metalsmith-typography [![Build Status](https://travis-ci.org/algenon/metalsmith-typography.svg?branch=master)](https://travis-ci.org/algenon/metalsmith-typography)

  A Metalsmith plugin to enhance typography in HTML — abbreviations, quotes and dashes, non-breaking spaces after prepositions. Based on [Richtypo.js](https://github.com/sapegin/richtypo.js).

## Installation

    $ npm install metalsmith-typography

## CLI Usage

  Install via npm and then add the `metalsmith-typography` key to your `metalsmith.json` plugins:

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

## Options

  `lang` determines which language to use. `en` and `ru` supported, `en` is the default.

  `rules` is an array of typographic rules to apply. Default is
```javascript
['save_tags', 'cleanup_before', 'lite', 'spaces_lite', 'spaces', 'quotes', 'abbrs', 'cleanup_after', 'restore_tags']
```
  See [Richtypo.js documentation](https://github.com/sapegin/richtypo.js) for the list of available rules.

## License

  MIT
