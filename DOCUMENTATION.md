## Documentation

You can see below the API reference of this module.

### `emojer(message, template, supportedEmojis)`
Replaces the `:emoji:` snippets in the input string with the specified template.

The `__EMOJI_NAME__` snippets in the template will be replaced with the emoji names.

#### Params

- **String** `message`: The input string containing `:emoji:`.
- **String** `template`: The template to be used for replacing the `:emoji:` icons.
- **String** `supportedEmojis`: A map of supported emoji names and truly values (e.g. `{ heart: true }`)

#### Return
- **String** The result string.

