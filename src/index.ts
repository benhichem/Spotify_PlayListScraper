import { StartScript } from "./component";
import fs from "node:fs"
import { GenerateArtistsLinks } from "./component/artists";



(async () => {
  console.log('[Refectoring stage 1 :: ]')
  const links:Array<string> = [
    "https://open.spotify.com/artist/2gqMBdyddvN82dzZt4ZF14",
    "https://open.spotify.com/artist/068h66CFkNBvqw5SaIQ3ZA",
    "https://open.spotify.com/artist/2MPe4h9blynt1CfCkMku6j",
    "https://open.spotify.com/artist/57FbfTkxFU7crAkIEtioth",
    "https://open.spotify.com/artist/75OSuJw6r1LCdYgmTt0gHs",
    "https://open.spotify.com/artist/1y20PpXw0yeuJ1avCD0Ob9",
    "https://open.spotify.com/artist/2iojnBLj0qIMiKPvVhLnsH",
    "https://open.spotify.com/artist/6dROiL44pIQZVNZ6Bc0OJO",
    "https://open.spotify.com/artist/7G6hXrjGpi6I7waNl4wxAk",
    "https://open.spotify.com/artist/2QycgFiuMbf6EiyqH9jeyY",
    "https://open.spotify.com/artist/0dvKgSdNB2U1gfp6ZcekYi",
    "https://open.spotify.com/artist/265tUaalp4HXRcbUyGAGoI",
    "https://open.spotify.com/artist/5IcGbIAgdns0R5EJKHMjCQ",
    "https://open.spotify.com/artist/3VStI6m5Ig9FAyUaa0lYAP",
    "https://open.spotify.com/artist/3Q8wgwyVVv0z4UEh1HB0KY",
    "https://open.spotify.com/artist/3IqWMVFksTbtL2EaFi5o8k",
    "https://open.spotify.com/artist/57kIMCLPgkzQlXjblX7XXP",
    "https://open.spotify.com/artist/2BpAc5eK7Rz5GAwSp9UYXa",
    "https://open.spotify.com/artist/7xUZ4069zcyBM4Bn10NQ1c",
    "https://open.spotify.com/artist/7FDlvgcodNfC0IBdWevl4u"
    ]

 const artistss = GenerateArtistsLinks(links)
 
  /* for (var i = 0; i < artistss.length; i++) {
    // await StartScript(artists[i], "micah_edwards")
    const elementArtists = artistss[i]
    for (var j = 0; elementArtists.artists.length; j++) {
      await StartScript(elementArtists.artists[j], elementArtists.artistsName)
    }
  } */


  

})()
