import puppeteer from "puppeteer-extra"
import Stealthplugin from "puppeteer-extra-plugin-stealth"
import { saveData, TreatUrl, validatePlaylist } from "./utils";
import { ScrapePlaylists } from "./scrapePlaylist";
const playlistInterested: Array<{ title: string; listners: string; artists: Array<string> }> = []

export async function StartScript(url: string, fileNAme: string) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      userDataDir: "profile1",
    })
    const page = await browser.newPage()
    await page.setViewport({
      height: 900,
      width: 1600
    })
    await page.goto(`${url}/discovered-on`, { waitUntil: "networkidle2", timeout: 0 })
    let x = await page.waitForSelector('div[data-encore-id="card"]')

    console.log(x ? true : false)

    const albums = await page.evaluate(() => {
      let attribute_album_links: Array<string> = []
      Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map((item) => {
        const attribute = (item as HTMLElement).getAttribute('aria-labelledby')
        if (attribute !== null) attribute_album_links.push(attribute)
        return attribute
      })
      return attribute_album_links

    })


    if (albums) {
      let list = await ScrapePlaylists(page, albums)
      // saveData("ty_StoneHawker.csv",validatePlaylist(list))
      let Validplaylist = validatePlaylist(list)
      saveData(`${fileNAme.trim()}.csv`, Validplaylist)
    }


    await page.close()
    await browser.close()

  } catch (error) {
    console.log(error)
  }
}


