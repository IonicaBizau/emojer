# emojer [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/emojer.svg)](https://www.npmjs.com/package/emojer) [![Downloads](https://img.shields.io/npm/dt/emojer.svg)](https://www.npmjs.com/package/emojer) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Emojify all the things.

## Installation

```sh
$ npm i --save emojer
```

## Example

```js
const emojer = require("emojer");

console.log(emojer("Hello :earth_americas: and :earth_africa:!", "<img src='https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5'>"));
// => "Hello <img src='https://github.global.ssl.fastly.net/images/icons/emoji/earth_americas.png?v5'> and <img src='https://github.global.ssl.fastly.net/images/icons/emoji/earth_africa.png?v5'>!"
```

## Documentation

### `emojer(message, template)`
Replaces the `:emoji:` snippets in the input string with the specified template.

The `__EMOJI_NAME__` snippets in the template will be replaced with the emoji names.

#### Params
- **String** `message`: The input string containing `:emoji:`.
- **String** `template`: The template to be used for replacing the `:emoji:` icons.

#### Return
- **String** The result string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md