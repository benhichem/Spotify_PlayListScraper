"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = require("./component");
(async () => {
    const artists = [
        'https://open.spotify.com/artist/3dU0eCKPKXUmeDunWr3Ha7',
        'https://open.spotify.com/artist/5Jvo8R85gGbk3XUkh883as',
        'https://open.spotify.com/artist/0jbXsyUAMmaJHGgF8g8HZy',
        'https://open.spotify.com/artist/0St0UP4Ko93saAbyvRGhx8',
        'https://open.spotify.com/artist/0EeY17gAdOJIBjNrpi6q1G',
        'https://open.spotify.com/artist/1y20PpXw0yeuJ1avCD0Ob9',
        'https://open.spotify.com/artist/2uMEr7c0zWQrtoAzebTMsa',
        'https://open.spotify.com/artist/4yMxdaUoKCalQPX9BMeeFf',
        'https://open.spotify.com/artist/2kEDso93O2hDgCbnuiSkkZ',
        'https://open.spotify.com/artist/0PZ37cyRFUP9o9nCdfS8J8',
        'https://open.spotify.com/artist/0LhcJOSPCu7MwB2o3tZuxf',
        'https://open.spotify.com/artist/0rTTgwJUHLQWqQV9sNvcbE',
        'https://open.spotify.com/artist/7gxsKHFFOFtx2zpx2Ur5Sa',
        'https://open.spotify.com/artist/0CcvfJAMRa28MnCnujCdXQ',
        'https://open.spotify.com/artist/612YJjBnm5H6J9djarFtiq',
        'https://open.spotify.com/artist/1TSEWPOtBfCelJqufaJvvZ',
        'https://open.spotify.com/artist/2DLo7eCypgXm3ViDvElOWE',
        'https://open.spotify.com/artist/05aFzjXP3Btq6cAL1PM8gz',
        'https://open.spotify.com/artist/3L3PAH3N5HFV6J4dvSXypZ',
        'https://open.spotify.com/artist/4Blw3ZwUWUvEZ7nkgGDdRi',
        'https://open.spotify.com/artist/2qFOYqFxPaIwEnffVhJhEn',
        'https://open.spotify.com/artist/5WLpN9bFV4liSYhf4J3aVs',
        'https://open.spotify.com/artist/4cEwEednPwWCdYT7ZhROZe',
        'https://open.spotify.com/artist/2nLlWcvMIIGHHnDOQMi0h6',
        'https://open.spotify.com/artist/0oK5D6uPhGu4Jk2dbZfodU',
        'https://open.spotify.com/artist/1dmBfZXCP98HFGOl5zgOWe',
        'https://open.spotify.com/artist/4a3eyfNIqS9Fy5l3ckBtB2',
        'https://open.spotify.com/artist/6cKB91cRebrHboAUTx5uUy',
        'https://open.spotify.com/artist/5ZuKNJpsYPbL7vWMKQ1PCf',
        'https://open.spotify.com/artist/21t0aavYGSGFkYYFhu6urk',
        'https://open.spotify.com/artist/0cTSCsVx04SSht9V6cpKN0'
    ];
    // const artists: Array<string> = JSON.parse(fs.readFileSync('artists.txt').toString());
    // console.log(artists)
    for (var i = 0; i < artists.length; i++) {
        await (0, component_1.StartScript)(artists[i], "micah_edwards");
    }
})();
