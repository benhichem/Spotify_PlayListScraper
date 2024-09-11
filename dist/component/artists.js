"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const node_fs_1 = __importDefault(require("node:fs"));
puppeteer_extra_1.default.use((0, puppeteer_extra_plugin_stealth_1.default)());
async function GenerateArtistsLinks(url) {
    try {
        const browser = await puppeteer_extra_1.default.launch({
            headless: false,
            userDataDir: "profile1"
        });
        const page = await browser.newPage();
        await page.setViewport({
            height: 900,
            width: 1600
        });
        await page.goto(url, { waitUntil: "networkidle2", timeout: 0 });
        await page.waitForSelector('span[data-testid="entityTitle"]');
        const artists = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('div > span > div > a')).map((item) => {
                return item.href;
            });
        });
        console.log(artists);
        node_fs_1.default.writeFileSync('artists.txt', JSON.stringify(artists));
    }
    catch (error) {
        console.log(error);
    }
}
GenerateArtistsLinks('https://open.spotify.com/playlist/37i9dQZF1DWT7oUl2XAhgF');
