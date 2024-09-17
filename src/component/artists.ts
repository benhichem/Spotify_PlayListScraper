import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import fs from "node:fs"

puppeteer.use(StealthPlugin())
async function GenerateArtistsLinks(url: string) {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      // args: ['--no-sandbow', '--disable-setuid-sandbox'],
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
    artists.push(url)
    let x = new Set(artists)
    const returnArtists = [...x]
    console.log(returnArtists)
    return returnArtists
  } catch (error) {
    console.log(error)
  }
}


// GenerateArtistsLinks("https://open.spotify.com/artist/3VStI6m5Ig9FAyUaa0lYAP")
GenerateArtistsLinks(' https://open.spotify.com/playlist/37i9dQZF1DWZpGSuzrdTXg')
