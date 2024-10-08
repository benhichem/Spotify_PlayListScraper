"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrapePlaylists = ScrapePlaylists;
const utils_1 = require("./utils");
async function ScrapePlaylists(page, albums) {
    console.log(albums.length);
    let playlists = [];
    for (var i = 0; i < albums.length; i++) {
        const album = albums[i];
        try {
            await page.goto((0, utils_1.TreatUrl)(album), {
                timeout: 0,
                waitUntil: "networkidle2",
            });
            let waitSelector = await page.waitForSelector('span[data-testid="entityTitle"]', {
                timeout: 5000,
            }).catch((error) => {
                return null;
            });
            if (waitSelector === null)
                continue;
            const playlistinfo = await page.evaluate(() => {
                const playlistCreator = document.querySelector("a[data-testid=creator-link]")
                    ? document.querySelector("a[data-testid=creator-link]")
                    : null;
                if (playlistCreator === null) {
                    return null;
                }
                else if (playlistCreator.innerText === "Spotify") {
                    return null;
                }
                let listners = "";
                const title = document.querySelector('span[data-testid="entityTitle"]')
                    ? document.querySelector('span[data-testid="entityTitle"]').innerText
                    : "";
                Array.from(document.querySelectorAll("span")).map((item) => {
                    if (item.innerText.includes("saves")) {
                        listners = item.innerText;
                    }
                });
                const art3 = [];
                const art = Array.from(document.querySelectorAll('div[data-testid="tracklist-row"]')).map((item) => {
                    return {
                        artistName: item.innerText.split("\n")[1] ? item.innerText.split("\n")[1] : null,
                        artistUrl: item.querySelectorAll("a")[1] ? item.querySelectorAll("a")[1].href : null,
                    };
                });
                const artSet = new Set(art);
                const artists = [...artSet];
                return {
                    title,
                    listners,
                    artists,
                    url: document.URL,
                    playlistCreator: playlistCreator.innerText,
                    playlistCreatorLink: playlistCreator.href,
                };
            });
            if (playlistinfo === null) {
                console.log("playlist was made by spotify");
            }
            else {
                console.log(playlistinfo);
                playlists.push(playlistinfo);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return playlists;
}
