"use strict";

const regexEmoji = require("regex-emoji")
    , matchAll = require("match-all")
    , barbe = require("barbe")
    ;

/**
 * emojer
 * Replaces the `:emoji:` snippets in the input string with the specified template.
 *
 * The `__EMOJI_NAME__` snippets in the template will be replaced with the emoji names.
 *
 * @name emojer
 * @function
 * @param {String} message The input string containing `:emoji:`.
 * @param {String} template The template to be used for replacing the `:emoji:` icons.
 * @param {String} supportedEmojis A map of supported emoji names and truly values (e.g. `{ heart: true }`)
 * @return {String} The result string.
 */
module.exports = function emojer (message, template, supportedEmojis) {
    let emojis = matchAll(message, regexEmoji()).toArray()
      , objEmojis = {}
      ;

    emojis.forEach(supportedEmojis ? c => {
        if (!supportedEmojis[c]) { return }
        objEmojis[c] = barbe(template, ["__", "__"], { EMOJI_NAME: c });
    } : c => {
        objEmojis[c] = barbe(template, ["__", "__"], { EMOJI_NAME: c });
    });

    return barbe(message, [":", ":"], objEmojis);
};
