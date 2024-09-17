"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const json_2_csv_1 = require("json-2-csv");
// let fileString = fs.readFileSync('./csvs/asgeir.csv').toString()
// let x = csv2json(fileString)
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
async function GetOwnerName(playlists) {
    try {
        const browser = await puppeteer_extra_1.default.launch({
            headless: true,
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport({
            height: 900,
            width: 1600
        });
        let results = [];
        for (let index = 0; index < 5; index++) {
            const element = playlists[index];
            try {
                await page.goto(element.url, { timeout: -1, waitUntil: "networkidle2" });
                await page.waitForSelector('span[data-testid="entityTitle"]', { timeout: 4999 });
                let creatorLink = await page.evaluate(() => {
                    let creator = document.querySelector('a[data-testid=creator-link]');
                    if (creator !== null) {
                        return {
                            playlistOwner: creator.innerText,
                            playlistOwnerProfile: creator.href
                        };
                    }
                });
                element.playlistOwner = creatorLink?.playlistOwner;
                element.playlistOwnerProfile = creatorLink?.playlistOwnerProfile;
                console.log(element);
                results.push(element);
            }
            catch (error) {
                console.log('[-] Failed to Get The PlaylistOwner ::', error);
                element.playlistName = "";
                element.playlistOwnerProfile = "";
                results.push(element);
            }
        }
        await page.close();
        await browser.close();
        return results;
    }
    catch (error) {
        console.log(error);
    }
}
const json_2_csv_2 = require("json-2-csv");
(async () => {
    const files = node_fs_1.default.readdirSync('./csvs');
    for (let index = 0; index < 1; index++) {
        const filename = files[index];
        const fileContenxt = node_fs_1.default.readFileSync(`./csvs/${filename}`).toString();
        const json = (0, json_2_csv_1.csv2json)(fileContenxt);
        let results = await GetOwnerName(json);
        let fileString = (0, json_2_csv_2.json2csv)(results);
        node_fs_1.default.writeFileSync(`./output/${filename}`, fileString);
    }
})();
