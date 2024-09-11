"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartScript = StartScript;
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const utils_1 = require("./utils");
const scrapePlaylist_1 = require("./scrapePlaylist");
const playlistInterested = [];
async function StartScript(url, fileNAme) {
    try {
        const browser = await puppeteer_extra_1.default.launch({
            headless: true,
            //      userDataDir: "profile4",
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
            executablePath: "/usr/bin/google-chrome-stable",
        });
        const page = await browser.newPage();
        await page.setViewport({
            height: 900,
            width: 1600
        });
        await page.goto(`${url}/discovered-on`, { waitUntil: "networkidle2", timeout: 0 });
        let x = await page.waitForSelector('div[data-encore-id="card"]');
        console.log(x ? true : false);
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
        if (albums) {
            let list = await (0, scrapePlaylist_1.ScrapePlaylists)(page, albums);
            // saveData("ty_StoneHawker.csv",validatePlaylist(list))
            let Validplaylist = (0, utils_1.validatePlaylist)(list);
            (0, utils_1.saveData)(`${fileNAme.trim()}.csv`, Validplaylist);
        }
        await page.close();
        await browser.close();
    }
    catch (error) {
        console.log(error);
    }
}
