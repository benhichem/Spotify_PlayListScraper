import { StartScript } from "./component";
import fs from "node:fs"



(async () => {
  const artists: Array<string> = [
  'https://open.spotify.com/artist/6tn9l68c9srJn5o3pXx2Fb',
  'https://open.spotify.com/artist/2nTjd2lNo1GVEfXM3bCnsh',
  'https://open.spotify.com/artist/6eU0jV2eEZ8XTM7EmlguK6',
  'https://open.spotify.com/artist/5HMNsIi6AQplZELW9jeLjd',
  'https://open.spotify.com/artist/4YLtscXsxbVgi031ovDDdh',
  'https://open.spotify.com/artist/72Pauuctba5lMzC89R0Vk0',
  'https://open.spotify.com/artist/0CcvfJAMRa28MnCnujCdXQ',
  'https://open.spotify.com/artist/60df5JBRRPcnSpsIMxxwQm',
  'https://open.spotify.com/artist/2nTjd2lNo1GVEfXM3bCnsh',
  'https://open.spotify.com/artist/3qnGvpP8Yth1AqSBMqON5x',
  'https://open.spotify.com/artist/0VGhTaOPNUJgUfX7rOmzMX',
  'https://open.spotify.com/artist/0tgaHqkU1p7QhBUIzKXVU9',
  'https://open.spotify.com/artist/3UtTKOuKlWMQPSCyIvCDl6',
  'https://open.spotify.com/artist/43cM1JWUzdfkZCi7rjkPnz',
  'https://open.spotify.com/artist/4cEwEednPwWCdYT7ZhROZe',
  'https://open.spotify.com/artist/22L3FsvrXWoLLEUApoNfpr',
  'https://open.spotify.com/artist/01aC2ikO4Xgb2LUpf9JfKp',
  'https://open.spotify.com/artist/2nTjd2lNo1GVEfXM3bCnsh',
  'https://open.spotify.com/artist/1yawxcvEJTTtsz2aX3yruE',
  'https://open.spotify.com/artist/2BVYdY4PyfCF9z4NrkhEB2',
  'https://open.spotify.com/artist/1t3BkCQTMTGykNPpmj7drk',
  'https://open.spotify.com/artist/4fXkvh05wFhuH77MfD4m9o',
  'https://open.spotify.com/artist/3xMIGFfOGiQN5iyQYLbMqC',
  'https://open.spotify.com/artist/2nTjd2lNo1GVEfXM3bCnsh',
  'https://open.spotify.com/artist/3avnA23xLmCYfnsivruOgq',
  'https://open.spotify.com/artist/6HhV0jtMMK5HYnYgG0xgtz',
  'https://open.spotify.com/artist/4bUqnkrDrb4f7rqmDR9yDu',
  'https://open.spotify.com/artist/6twIAGnYuIT1pncMAsXnEm',
  'https://open.spotify.com/artist/0CUpzKPDfIVzYqMn47jiV3',
  'https://open.spotify.com/artist/14mcXN2C0EoRrt96ddtL4L'
  ]
  // const artists: Array<string> = JSON.parse(fs.readFileSync('artists.txt').toString());
  // console.log(artists)
  for (var i = 0; i < artists.length; i++) {
    await StartScript(artists[i], "sony")
  }

})()
