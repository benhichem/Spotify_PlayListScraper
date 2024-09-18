import fs from "node:fs";
import { csv2json } from "json-2-csv";

// let fileString = fs.readFileSync('./csvs/asgeir.csv').toString()

// let x = csv2json(fileString)

import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth"

async function GetOwnerName(playlists: Array<{ playlistOwnerProfile: string, playlistOwner: string, url: string; playlistName: string; saves: string }>) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    })
    const page = await browser.newPage()
    await page.setViewport({
      height: 900,
      width: 1600
    })
    let results: Array<{ playlistOwnerProfile: string, playlistOwner: string, url: string; playlistName: string; saves: string }> = []
    for (let index = 0; index < playlists.length; index++) {
      const element = playlists[index];
      await page.goto(element.url, { timeout: 0, waitUntil: "networkidle2" })
      await page.waitForSelector('span[data-testid="entityTitle"]', { timeout: 5000 })
      let creatorLink = await page.evaluate(() => {
        let creator = document.querySelector('a[data-testid=creator-link]')
        if (creator !== null) {
          return {
            playlistOwner: (creator as HTMLAnchorElement).innerText,
            playlistOwnerProfile: (creator as HTMLAnchorElement).href
          }
        }
      })
      element.playlistOwner = creatorLink?.playlistOwner!
      element.playlistOwnerProfile = creatorLink?.playlistOwnerProfile!
      console.log(element)
      results.push(element)
    }
    return results
  } catch (error) {
    console.log(error)
  }
}

import { json2csv } from "json-2-csv";
(async () => {

  const files = fs.readdirSync('./csvs')
  for (let index = 0; index < files.length; index++) {
    const filename = files[index];
    const fileContenxt = fs.readFileSync(`./csvs/${filename}`).toString()
    const json: any = csv2json(fileContenxt)
    let results = await GetOwnerName(json)
    let fileString = json2csv(results!)
    fs.writeFileSync(`./output/${filename}`, fileString)
  }
})()

