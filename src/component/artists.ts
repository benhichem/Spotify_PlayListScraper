import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"
import fs from "node:fs"
import { ScrapePlaylists } from "./scrapePlaylist";

puppeteer.use(StealthPlugin())

export async function GenerateArtistsLinks(artistsArray:Array<string>) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbow', '--disable-setuid-sandbox'],
    })
    const page = await browser.newPage()
    await page.setViewport({
      height: 900,
      width: 1600
    })
    for (let index = 0; index < artistsArray.length; index++) {
      const url = artistsArray[index];
      await page.goto(`${url}/discovered-on`, { waitUntil: "networkidle2", timeout: 0 });
      const cards = await page.waitForSelector('section[aria-label="Discovered on"]',{timeout:30000 });
      console.log(cards ? true: false)

      const albums = await page.evaluate(() => {
        let attribute_album_links: Array<string> = []
        Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map((item) => {
          const attribute = (item as HTMLElement).getAttribute('aria-labelledby')
          if (attribute !== null) attribute_album_links.push(attribute)
          return attribute
        })
        return attribute_album_links
      })

      const playlistInfo = await ScrapePlaylists(page, albums)
      console.log(playlistInfo)



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
  } catch (error) {
    console.log(error)
  }
}