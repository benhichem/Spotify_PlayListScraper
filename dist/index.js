"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artistss = [
        {
            artistsName: "richie_allen",
            artists: [
                'https://open.spotify.com/artist/7xZgMvtftYlkdIPa0P7xzc',
                'https://open.spotify.com/artist/2QMsj4XJ7ne2hojxt6v5eb',
                'https://open.spotify.com/artist/4oUHIQIBe0LHzYfvXNW4QM',
            ]
        }, {
            artistsName: "Frenchi_balard",
            artists: [
                'https://open.spotify.com/artist/0dvKgSdNB2U1gfp6ZcekYi',
                'https://open.spotify.com/artist/4oUHIQIBe0LHzYfvXNW4QM',
                'https://open.spotify.com/artist/4GGfAshSkqoxpZdoaHm7ky',
                'https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS',
                'https://open.spotify.com/artist/6yJCxee7QumYr820xdIsjo',
                'https://open.spotify.com/artist/3y2cIKLjiOlp1Np37WiUdH',
                'https://open.spotify.com/artist/2IvkS5MXK0vPGnwyJsrEyV',
                'https://open.spotify.com/artist/7Ez6lTtSMjMf2YSYpukP1I',
                'https://open.spotify.com/artist/1mfDfLsMxYcOOZkzBxvSVW',
                'https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60',
                'https://open.spotify.com/artist/32WkQRZEVKSzVAAYqukAEA',
                'https://open.spotify.com/artist/19k8AgwwTSxeaxkOuCQEJs',
                'https://open.spotify.com/artist/1dID9zgn0OV0Y8ud7Mh2tS',
                'https://open.spotify.com/artist/64KEffDW9EtZ1y2vBYgq8T',
                'https://open.spotify.com/artist/3oSJ7TBVCWMDMiYjXNiCKE',
            ]
        },
        {
            artistsName: "locash",
            artists: [
                'https://open.spotify.com/artist/5IcGbIAgdns0R5EJKHMjCQ',
                'https://open.spotify.com/artist/4oUHIQIBe0LHzYfvXNW4QM',
                'https://open.spotify.com/artist/3b8QkneNDz4JHKKKlLgYZg',
                'https://open.spotify.com/artist/718COspgdWOnwOFpJHRZHS',
                'https://open.spotify.com/artist/2IvkS5MXK0vPGnwyJsrEyV',
                'https://open.spotify.com/artist/1n2pb9Tsfe4SwAjmUac6YT',
                'https://open.spotify.com/artist/4MoAOfV4ROWofLG3a3hhBN',
                'https://open.spotify.com/artist/7x8nK0m0cP2ksQf0mjWdPS',
                'https://open.spotify.com/artist/6yJCxee7QumYr820xdIsjo',
                'https://open.spotify.com/artist/0o0rlxlC3ApLWsxFkUjMXc',
                'https://open.spotify.com/artist/5azNn3SGFgSPz8dCzEgbbN',
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
