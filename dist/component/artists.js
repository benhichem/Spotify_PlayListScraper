"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateArtistsLinks = GenerateArtistsLinks;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const scrapePlaylist_1 = require("./scrapePlaylist");
const utils_1 = require("./utils");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
async function GenerateArtistsLinks(artistsArray) {
    try {
        const browser = await puppeteer_extra_1.default.launch({
            headless: true,
            args: ["--no-sandbow", "--disable-setuid-sandbox"],
        });
        const page = await browser.newPage();
        await page.setViewport({
            height: 900,
            width: 1600,
        });
        for (let index = 0; index <= artistsArray.length; index++) {
            const url = artistsArray[index];
            // Getting Artist Name
            let navigation = await page.goto(url, { timeout: 0, waitUntil: "networkidle2" }).catch((error) => {
                return null;
            });
            if (navigation === null) {
                console.log('Failed To navigate to url :: ', url);
                continue;
            }
            await page.waitForSelector('span[data-testid="entityTitle"]');
            const OriginalArtistName = await page.evaluate(() => {
                let name = document.querySelector('span[data-testid="entityTitle"]')
                    ? document.querySelector('span[data-testid="entityTitle"]').innerText
                    : "";
                return name;
            });
            console.log(OriginalArtistName);
            // Getting Artist Cards
            await page.goto(`${url}/discovered-on`, {
                waitUntil: "networkidle2",
                timeout: 0,
            });
            const cards = await page.waitForSelector('section[aria-label="Discovered on"]', { timeout: 30000 });
            console.log(cards ? true : false);
            const OriginalArtistAlbums = await page.evaluate(() => {
                let attribute_album_links = [];
                Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map((item) => {
                    const attribute = item.getAttribute("aria-labelledby");
                    if (attribute !== null)
                        attribute_album_links.push(attribute);
                    return attribute;
                });
                return attribute_album_links;
            });
            const playlistInfo = await (0, scrapePlaylist_1.ScrapePlaylists)(page, OriginalArtistAlbums);
            console.log(playlistInfo);
            console.log("Original Playlist Cards Found is :: ", playlistInfo.length);
            if (playlistInfo.length === 0) {
                console.log(`${OriginalArtistAlbums}`);
                continue;
            }
            const AvaliableArtistFound = [];
            // final Playlist To return and print into csv
            const FinalPlaylist = [];
            let valideOriginalCard = (0, utils_1.validatePlaylistSaves)(playlistInfo);
            valideOriginalCard.map((item) => {
                FinalPlaylist.push(item);
            });
            playlistInfo.map((artist) => {
                artist.artists.map((item) => {
                    if (!AvaliableArtistFound.includes(item)) {
                        AvaliableArtistFound.push(item);
                    }
                });
            });
            // console.log(`Current Playlist record is ${FinalPlaylist.length}`)
            for (var i = 0; i < AvaliableArtistFound.length; i++) {
                console.log(`Current Playlist record is ${FinalPlaylist.length}`);
                //await page.goto(AvaliableArtistFound)
                // we check if artist has +1k followers
                const elementArtist = AvaliableArtistFound[i];
                if (elementArtist.artistUrl === null) {
                    console.log('artist Url is null ...');
                    continue;
                }
                try {
                    await page.goto(elementArtist.artistUrl, {
                        timeout: 0,
                        waitUntil: "networkidle2",
                    });
                    const followers = await page.evaluate(() => {
                        return document.querySelector("span.Ydwa1P5GkCggtLlSvphs")
                            ? document.querySelector("span.Ydwa1P5GkCggtLlSvphs").innerText
                            : 0;
                    });
                    if (typeof followers === "number") {
                        console.log('Follower Counts undefined  :: ', followers);
                        continue;
                    }
                    else if (typeof followers === "string") {
                        const numFolloweris = eval(followers.split(' ')[0].split(',').join(''));
                        console.log(numFolloweris);
                        if (numFolloweris < 40000) {
                            console.log('follower count is lower than 100k');
                            continue;
                        }
                        else {
                            // its a valid Artist 
                            console.log(`${elementArtist.artistName} is a valid Artist ... `);
                            await page.goto(`${elementArtist.artistUrl}/discovered-on`, { timeout: 0, waitUntil: "networkidle2" });
                            const cards = await page.evaluate(() => {
                                let attribute_album_links = [];
                                Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map((item) => {
                                    const attribute = item.getAttribute("aria-labelledby");
                                    if (attribute !== null)
                                        attribute_album_links.push(attribute);
                                    return attribute;
                                });
                                return attribute_album_links;
                            });
                            console.log('Cards :: ', cards.length);
                            const playlistFromConnectedArtist = await (0, scrapePlaylist_1.ScrapePlaylists)(page, cards);
                            // validating playlists Here ...
                            let AfterFinalPlaylist = (0, utils_1.validatePlaylistSaves)(playlistFromConnectedArtist);
                            AfterFinalPlaylist.map((playlist) => {
                                FinalPlaylist.push(playlist);
                            });
                            if (FinalPlaylist.length > 500) {
                                (0, utils_1.saveData)(`./csvs/${OriginalArtistName}.csv`, FinalPlaylist);
                                break;
                            }
                            if (FinalPlaylist.length - index === 1) {
                                (0, utils_1.saveData)(`./csvs/${OriginalArtistName}.csv`, FinalPlaylist);
                                break;
                            }
                        }
                    }
                }
                catch (error) {
                    console.log(error);
                    console.log(`failed to scrape ${elementArtist.artistName} at ${elementArtist.artistUrl}`);
                    continue;
                }
            }
        }
        await page.close();
        await browser.close();
        return;
    }
    catch (error) {
        console.log(error);
        /*  continue; */
    }
}
