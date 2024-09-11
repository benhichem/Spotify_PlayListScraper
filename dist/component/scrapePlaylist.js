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
            await page.goto((0, utils_1.TreatUrl)(album), { timeout: 0, waitUntil: "networkidle2" });
            await page.waitForSelector('span[data-testid="entityTitle"]', { timeout: 5000 });
            const playlistinfo = await page.evaluate(() => {
                let listners = "";
                const title = document.querySelector('span[data-testid="entityTitle"]') ? document.querySelector('span[data-testid="entityTitle"]').innerText : "";
                Array.from(document.querySelectorAll('span')).map((item) => {
                    if (item.innerText.includes('saves')) {
                        listners = item.innerText;
                    }
                });
                const art3 = [];
                const art = Array.from(document.querySelectorAll('div[data-testid="tracklist-row"]')).map((item) => {
                    return item.innerText.split('\n')[1];
                });
                art.map((item) => {
                    if (item.includes(",")) {
                        item.split(',').map((ids) => {
                            art3.push(ids.trim());
                        });
                    }
                    else {
                        art3.push(item);
                    }
                });
                const artSet = new Set(art3);
                const artists = [...artSet];
                return { title, listners, artists, url: document.URL };
            });
            console.log(playlistinfo);
            playlists.push(playlistinfo);
        }
        catch (error) {
            return [];
        }
    }
    return playlists;
}
