const emojer = require("../lib");

console.log(emojer("Hello :earth_americas: and :earth_africa:!", "<img src='https://github.global.ssl.fastly.net/images/icons/emoji/__EMOJI_NAME__.png?v5'>"));
// => "Hello <img src='https://github.global.ssl.fastly.net/images/icons/emoji/earth_americas.png?v5'> and <img src='https://github.global.ssl.fastly.net/images/icons/emoji/earth_africa.png?v5'>!"
