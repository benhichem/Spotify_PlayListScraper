"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artistss = [
        {
            artistsName: "locash",
            artists: [
                'https://open.spotify.com/artist/1By9QBFnjZAoI83BZppHlt',
                'https://open.spotify.com/artist/5BKzvAPtNXnt0LwzGvKOH3',
                'https://open.spotify.com/artist/7FY5V3XMwlNBPitEjXowHQ',
                'https://open.spotify.com/artist/3FfvYsEGaIb52QPXhg4DcH',
                'https://open.spotify.com/artist/7vCtweS8UVAXTyau2j0rDT',
                ' https://open.spotify.com/playlist/02t75h5hsNOw4VlC1Qad9Z'
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
