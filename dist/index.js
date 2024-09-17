"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artistss = [
        {
            artistsName: "jullie_fowlis",
            artists: [
                "https://open.spotify.com/artist/3IqWMVFksTbtL2EaFi5o8k",
                'https://open.spotify.com/artist/1T8S48bD91THNKBByWBDyn',
                'https://open.spotify.com/artist/4vdAAzZBUKbsrvHi6UR7B7',
                'https://open.spotify.com/artist/5mnS9jJdKQQcRSqFu5YPVe',
                'https://open.spotify.com/artist/0P0do9GwiSgweSF6Ui3mrv',
                'https://open.spotify.com/artist/0RH6EMxqfzCEB7QCSKQ4xr',
                'https://open.spotify.com/artist/5UdPkKWd8YNR5xGcmqH9QJ',
                'https://open.spotify.com/artist/5xk0kRuXn1zToTHpHAqpui',
                'https://open.spotify.com/artist/2LJxr7Pt3JnP60eLxwbDOu',
                'https://open.spotify.com/artist/29PgYEggDV3cDP9QYTogwv',
                'https://open.spotify.com/artist/36CUTsdtNgCwMq6zKD1l8I',
                'https://open.spotify.com/artist/72kqSqk124Vnl1wtT6q9Fh',
                'https://open.spotify.com/artist/2as15AH2BTrPk8v4gyElmr',
                'https://open.spotify.com/artist/18MFcGBHtyW0mU3ufcm0X1',
                'https://open.spotify.com/artist/5PYToRCsrnvikZg3yl2JMr',
                'https://open.spotify.com/artist/3xLU748QxpTmIVaiNXXg0P',
                'https://open.spotify.com/artist/2kHxkdiKCSnHMkhIgFBZaI',
                'https://open.spotify.com/artist/47NluEnhJda2gsnjuvcoob',
                'https://open.spotify.com/artist/73Np75Wv2tju61Eo9Zw4IR',
                'https://open.spotify.com/artist/1WgXqy2Dd70QQOU7Ay074N',
                'https://open.spotify.com/artist/5JZ7CnR6gTvEMKX4g70Amv',
                'https://open.spotify.com/artist/5U4QDnlOlmZx9MHV45EoDE',
                'https://open.spotify.com/artist/6wIj7GdxBjFtw6ySpzazwo',
                'https://open.spotify.com/artist/6sLwRSXSUF5JTUnQaFenyj',
                'https://open.spotify.com/artist/1kB7GlXzdNWl28zLcOkQqU',
                'https://open.spotify.com/artist/40xbWSB4JPdOkRyuTDy1oP',
                'https://open.spotify.com/artist/6pItJ6ijL7bMCneuwqRreN',
                'https://open.spotify.com/artist/2q10Wskc3lPYmEuV7rzMCv',
                'https://open.spotify.com/artist/09oR0uKhqwScsKa2eUK97p',
            ]
        }, {
            artistsName: "james vincent mcmorrow",
            artists: [
                "https://open.spotify.com/artist/7FDlvgcodNfC0IBdWevl4u",
                'https://open.spotify.com/artist/6AyATGg7mDgBlZ4N5uNog0',
                'https://open.spotify.com/artist/2DyS2mSsaFkj5nFB3P6KqU',
                'https://open.spotify.com/artist/1CwqAnNZyIYqC7SWpTUpwk',
                'https://open.spotify.com/artist/2e0OOXFJ610jkry76XceeS',
                'https://open.spotify.com/artist/72r3ZCpFAFMj7ISnPfcTPU',
                'https://open.spotify.com/artist/65Tmt9uAPTYGl1ZhsOeEJ6',
                'https://open.spotify.com/artist/6SbjUvOLEYreFr16Gvn8kv',
                'https://open.spotify.com/artist/7tPhoEe9VD1m37VqUiC6hA',
                'https://open.spotify.com/artist/24gClotFFIb7genYn5C3OU',
                'https://open.spotify.com/artist/4aT85lix0NSNB6w9Ozzksq',
                'https://open.spotify.com/artist/4xnihxcoXWK3UqryOSnbw5',
                'https://open.spotify.com/artist/0ZLfGbfO9xjpfna1pN8BeX',
                'https://open.spotify.com/artist/7jdFEYD2LTYjfwxOdlVjmc',
                'https://open.spotify.com/artist/55VC7UDCmceodks4rbHgHe',
                'https://open.spotify.com/artist/1zO3MgzmcwZLLNUQqeU2XH',
                'https://open.spotify.com/artist/5jbk18C7YXRcEZxUWPJCyT',
                'https://open.spotify.com/artist/1roi4E4kE3vXaKxQ2n5aKB',
                'https://open.spotify.com/artist/5yMkHmsdRZA4OVeCylF4xU',
                'https://open.spotify.com/artist/0WTTqGh79njNF2o4Cgklc1',
                'https://open.spotify.com/artist/1nzhkCvUySFs0Fsj57qXYX',
                'https://open.spotify.com/artist/1cwOthlzLBwN8Imbq7P71H',
                'https://open.spotify.com/artist/1STiTeuda0CtQf1DDh7F8P',
                'https://open.spotify.com/artist/2icndAD2G5umAWdgrARONR',
                'https://open.spotify.com/artist/7q7IUe2AqtifSZ2q52kHFc',
                'https://open.spotify.com/artist/4lhUHpVOXmkEBGGHV71QCh',
                'https://open.spotify.com/artist/2tcIUL0ZNEo2gnrBzNBz3L',
                ' https://open.spotify.com/playlist/37i9dQZF1DWZpGSuzrdTXg'
            ]
        }
    ]; // const artists: Array<string> = JSON.parse(fs.readFileSync('artists.txt').toString());
    // console.log(artists)
    for (var i = 0; i < artistss.length; i++) {
        // await StartScript(artists[i], "micah_edwards")
        const elementArtists = artistss[i];
        for (var j = 0; elementArtists.artists.length; j++) {
            await (0, component_1.StartScript)(elementArtists.artists[j], elementArtists.artistsName);
        }
    }
})();
