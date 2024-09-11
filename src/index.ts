import { StartScript } from "./component";
import fs from "node:fs"



(async () => {
  const artistss: Array<{ artistsName: string, artists: Array<string> }> = [
    {
      artistsName: "Tray_Songs",
      artists: [
        "https://open.spotify.com/artist/2iojnBLj0qIMiKPvVhLnsH",
        'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
        'https://open.spotify.com/artist/1vfezMIyCr4XUdYRaKIKi3',
        'https://open.spotify.com/artist/7xAcVHPiirnUqfdqo0USb1',
        'https://open.spotify.com/artist/27FGXRNruFoOdf1vP8dqcH',
        'https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj',
        'https://open.spotify.com/artist/2NdeV5rLm47xAvogXrYhJX',
        'https://open.spotify.com/artist/2wIVse2owClT7go1WT98tk',
        'https://open.spotify.com/artist/31TPClRtHm23RisEBtV3X7',
        'https://open.spotify.com/artist/1Xfmvd48oOhEWkscWyEbh9',
        'https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865',
        'https://open.spotify.com/artist/3aQeKQSyrW4qWr35idm0cy',
        'https://open.spotify.com/artist/5rkVyNGXEgeUqKkB5ccK83',
        'https://open.spotify.com/artist/20s0P9QLxGqKuCsGwFsp7w',
        'https://open.spotify.com/artist/47zz7sob9NUcODy0BTDvKx',
        'https://open.spotify.com/artist/7IfculRW2WXyzNQ8djX8WX',
      ]
    }, {
      artistsName: "pleasure_p",
      artists: [
        'https://open.spotify.com/artist/6dROiL44pIQZVNZ6Bc0OJO',
        'https://open.spotify.com/artist/20s0P9QLxGqKuCsGwFsp7w',
        'https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj',
        'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
        'https://open.spotify.com/artist/21E3waRsmPlU7jZsS13rcj',
        'https://open.spotify.com/artist/2iojnBLj0qIMiKPvVhLnsH',
        'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
        'https://open.spotify.com/artist/1J2VVASYAamtQ3Bt8wGgA6',
        'https://open.spotify.com/artist/5rkVyNGXEgeUqKkB5ccK83',
        'https://open.spotify.com/artist/3hTHBCmJKr6UIooe5a5o7m',
        'https://open.spotify.com/artist/4hbv1KOjm3u9K5BrmWDOwM',
        'https://open.spotify.com/artist/7vPGzgDg3qGUY5bWtrO3K4',
        'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
        'https://open.spotify.com/artist/3KV3p5EY4AvKxOlhGHORLg',
        'https://open.spotify.com/artist/6oKeE1UH8FizqNPScqM1NE',
        'https://open.spotify.com/artist/3ScY9CQxNLQei8Umvpx5g6',
      ]
    },
    {
      artistsName: "j_holiday",
      artists: [
        'https://open.spotify.com/artist/7G6hXrjGpi6I7waNl4wxAk',
        'https://open.spotify.com/artist/360IAlyVv4PCEVjgyMZrxK',
        'https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa',
        'https://open.spotify.com/artist/2EMAnMvWE2eb56ToJVfCWs',
        'https://open.spotify.com/artist/2h93pZq0e7k5yf4dywlkpM',
        'https://open.spotify.com/artist/1vfezMIyCr4XUdYRaKIKi3',
        'https://open.spotify.com/artist/20s0P9QLxGqKuCsGwFsp7w',
        'https://open.spotify.com/artist/6t7nbFAc2dUa7oNu7kBOui',
        'https://open.spotify.com/artist/2Mu5NfyYm8n5iTomuKAEHl',
        'https://open.spotify.com/artist/0TImkz4nPqjegtVSMZnMRq',
        'https://open.spotify.com/artist/5rkVyNGXEgeUqKkB5ccK83',
        'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
        'https://open.spotify.com/artist/4iHNK0tOyZPYnBU7nGAgpQ',
        'https://open.spotify.com/artist/7HkdQ0gt53LP4zmHsL0nap',
        'https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj',
        'https://open.spotify.com/artist/57LYzLEk2LcFghVwuWbcuS',
        'https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4',
        'https://open.spotify.com/artist/05RZIdfz59ZW2FvFuwnmNK',
        'https://open.spotify.com/artist/7IfculRW2WXyzNQ8djX8WX',
      ]
    },
    {
      artistsName: "richie_allen",
      artists: [
        "https://open.spotify.com/artist/2QycgFiuMbf6EiyqH9jeyY",
        'https://open.spotify.com/artist/3y2cIKLjiOlp1Np37WiUdH',
        'https://open.spotify.com/artist/4sCKpwwEsgReZxjtKFm2A0',
        'https://open.spotify.com/artist/5Ppie0uPnbnvGBYRwYmlt0',
        'https://open.spotify.com/artist/7kplJl06UmldxLKseURAYi',
        'https://open.spotify.com/artist/59Jhwh2IQEif7k6tlF8nJa',
        'https://open.spotify.com/artist/78YqeIji3mgAS2K1Maca6x',
        'https://open.spotify.com/artist/4BYxqVkZyFjtik7crYLg5Q',
        'https://open.spotify.com/artist/4NYMUsIcUUsBHbV9DICa5x',
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
  ]  // const artists: Array<string> = JSON.parse(fs.readFileSync('artists.txt').toString());
  // console.log(artists)
  for (var i = 0; i < artistss.length; i++) {
    // await StartScript(artists[i], "micah_edwards")
    const elementArtists = artistss[i]
    for (var j = 0; elementArtists.artists.length; j++) {
      await StartScript(elementArtists.artists[j], elementArtists.artistsName)
    }
  }

})()
