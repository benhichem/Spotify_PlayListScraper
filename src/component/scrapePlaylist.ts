import { Page } from "puppeteer";
import { TreatUrl } from "./utils";
// scrpae Plaulists for an artits
import { playlist } from "./utils";

export async function ScrapePlaylists(page: Page, albums: Array<string>): Promise<Array<playlist>> {
  console.log(albums.length)
  let playlists: Array<playlist> = []
  for (var i = 1; i <albums.length; i++) {
    const album = albums[i]
    try {
      await page.goto(TreatUrl(album), { timeout: 0, waitUntil: "networkidle2" })
      await page.waitForSelector('span[data-testid="entityTitle"]', { timeout: 5000 })
      const playlistinfo = await page.evaluate(() => {
        let listners: string = "";
        const title = document.querySelector('span[data-testid="entityTitle"]') ? (document.querySelector('span[data-testid="entityTitle"]') as HTMLElement).innerText : ""
        Array.from(document.querySelectorAll('span')).map((item) => {
          if (item.innerText.includes('saves')) {
            listners = item.innerText
          }
        })
        const art3: Array<string> = []
        const art = Array.from(document.querySelectorAll('div[data-testid="tracklist-row"]')).map((item) => {
          return (item as HTMLElement).innerText.split('\n')[1]
        })
        art.map((item) => {
          if (item.includes(",")) {
            item.split(',').map((ids) => {
              art3.push(ids.trim())
            })
          } else {
            art3.push(item)
          }
        })
        const artSet = new Set(art3)
        const artists = [...artSet]
        return { title, listners, artists, url: document.URL }
      })
      console.log(playlistinfo)
      playlists.push(playlistinfo)
    } catch (error) {
      return [] as Array<playlist>
    }
  }
  return playlists
}
