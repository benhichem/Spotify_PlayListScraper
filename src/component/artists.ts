import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import fs from "node:fs"

puppeteer.use(StealthPlugin())
async function GenerateArtistsLinks(url: string) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      userDataDir: "profile1"
    })
    const page = await browser.newPage()
    await page.setViewport({
      height: 900,
      width: 1600
    })
    await page.goto(url, { waitUntil: "networkidle2", timeout: 0 })
    await page.waitForSelector('span[data-testid="entityTitle"]')
    const artists = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('div > span > div > a')).map((item) => {
        return (item as HTMLAnchorElement).href
      })
    })
    console.log(artists)
    fs.writeFileSync('artists.txt', JSON.stringify(artists))
  } catch (error) {
    console.log(error)
  }
}


GenerateArtistsLinks('https://open.spotify.com/playlist/3Z72yCEE7ejhoTr7C8liQy')
