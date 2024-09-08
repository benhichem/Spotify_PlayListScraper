import { StartScript } from "./component";
import fs from "node:fs"



(async () => {
  const artists: Array<string> = [
    'https://open.spotify.com/artist/0WfaItAbs4vlgIA1cuqGtJ',
    'https://open.spotify.com/artist/2qNrJcE9LjzPdiXbrjkqFa',
    'https://open.spotify.com/artist/0kRAKgEOVI43Qkz9PLmPt8',
    'https://open.spotify.com/artist/7H55rcKCfwqkyDFH9wpKM6',
    'https://open.spotify.com/artist/4M5nCE77Qaxayuhp3fVn4V',
    'https://open.spotify.com/artist/6b0Wy4mw8ePj9w2EX3s4V3',
    'https://open.spotify.com/artist/7JSBgXyCDzX24iZCHJofIG',
    'https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa',
    'https://open.spotify.com/artist/23xqmJEN3oVxwzqtNIyR5m',
    'https://open.spotify.com/artist/5wD0owYApRtYmjPWavWKvb',
    'https://open.spotify.com/artist/7CQwac16i1W5ej8YpuL3dv',
    'https://open.spotify.com/artist/6cpVjPOo5Ozn28hUfYBXqm',
    'https://open.spotify.com/artist/3kft86DbqCNr7rjq3pEj0G',
    'https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG',
    'https://open.spotify.com/artist/5sXaGoRLSpd7VeyZrLkKwt',
    'https://open.spotify.com/artist/6mU8ucezzms5I2kNH6HNlu',
    'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
    'https://open.spotify.com/artist/6qqNVTkY8uBg9cP3Jd7DAH',
    'https://open.spotify.com/artist/2v4e16xkId2E5YbYEWgPP8',
    'https://open.spotify.com/artist/42daDEQTdYaqtHG5sH5HMD',
    'https://open.spotify.com/artist/7h4j9YTJJuAHzLCc3KCvYu',
    'https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG',
    'https://open.spotify.com/artist/2qNrJcE9LjzPdiXbrjkqFa',
    'https://open.spotify.com/artist/3M4HosBeaD82iQkv8HVnzB',
    'https://open.spotify.com/artist/0S9wI9ZGeEwgNmVC61utdR',
    'https://open.spotify.com/artist/1fOenv6ujqqTxpdl14eDkK',
    'https://open.spotify.com/artist/574qIjE9UTvfSvtnIrdLaE',
    'https://open.spotify.com/artist/0WfaItAbs4vlgIA1cuqGtJ',
    'https://open.spotify.com/artist/3Aut8hgiqZSy2qmJluZMU9',
    'https://open.spotify.com/artist/3QGKsAfhZdldQCLuLjk6zl',
    'https://open.spotify.com/artist/4tvKz56Tr39bkhcQUTO0Xr',
    'https://open.spotify.com/artist/1r1uxoy19fzMxunt3ONAkG'
  ]
  // const artists: Array<string> = JSON.parse(fs.readFileSync('artists.txt').toString());
  // console.log(artists)
  for (var i = 0; i < artists.length; i++) {
    await StartScript(artists[i], "yala")
  }

})()
