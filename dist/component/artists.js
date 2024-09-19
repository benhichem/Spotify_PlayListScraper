"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateArtistsLinks = GenerateArtistsLinks;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const scrapePlaylist_1 = require("./scrapePlaylist");
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
async function GenerateArtistsLinks(artistsArray) {
    try {
        const browser = await puppeteer_extra_1.default.launch({
            headless: false,
            args: ['--no-sandbow', '--disable-setuid-sandbox'],
        });
        const page = await browser.newPage();
        await page.setViewport({
            height: 900,
            width: 1600
        });
        for (let index = 0; index < artistsArray.length; index++) {
            const url = artistsArray[index];
            await page.goto(`${url}/discovered-on`, { waitUntil: "networkidle2", timeout: 0 });
            const cards = await page.waitForSelector('section[aria-label="Discovered on"]', { timeout: 30000 });
            console.log(cards ? true : false);
            const albums = await page.evaluate(() => {
                let attribute_album_links = [];
                Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map((item) => {
                    const attribute = item.getAttribute('aria-labelledby');
                    if (attribute !== null)
                        attribute_album_links.push(attribute);
                    return attribute;
                });
                return attribute_album_links;
            });
            const playlistInfo = await (0, scrapePlaylist_1.ScrapePlaylists)(page, albums);
            console.log(playlistInfo);
        }
        /*     const artists = await page.evaluate(() => {
              return Array.from(document.querySelectorAll('div > span > div > a')).map((item) => {
                return (item as HTMLAnchorElement).href
              })
            }) */
        /*artists.push(url)
          let x = new Set(artists)
          const returnArtists = [...x]
          console.log(returnArtists)
          return returnArtists */
    }
    catch (error) {
        console.log(error);
    }
}
// GenerateArtistsLinks("https://open.spotify.com/artist/3VStI6m5Ig9FAyUaa0lYAP")
// GenerateArtistsLinks(' https://open.spotify.com/playlist/37i9dQZF1DWZpGSuzrdTXg')
