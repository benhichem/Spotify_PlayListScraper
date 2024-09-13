"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artistss = [
         {
            artistsName: 'asgeir',
            artists: [
                'https://open.spotify.com/artist/6CWTBjOJK75cTE8Xv8u1kj',
                'https://open.spotify.com/artist/4EVpmkEwrLYEg6jIsiPMIb',
                'https://open.spotify.com/artist/6zVFRTB0Y1whWyH7ZNmywf',
                'https://open.spotify.com/artist/3gd8FJtBJtkRxdfbTu19U2',
                'https://open.spotify.com/artist/2RdwBSPQiwcmiDo9kixcl8',
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
