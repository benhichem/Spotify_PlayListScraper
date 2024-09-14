"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artistss = [
    {
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
