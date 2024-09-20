import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import fs from "node:fs";
import { ScrapePlaylists } from "./scrapePlaylist";
import { Artist, playlist, saveData, validatePlaylistSaves } from "./utils";

puppeteer.use(StealthPlugin());

export async function GenerateArtistsLinks(artistsArray: Array<string>) {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbow", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.setViewport({
      height: 900,
      width: 1600,
    });
    for (let index = 0; index < 1; index++) {
      const url = artistsArray[index];

      // Getting Artist Name
      await page.goto(url, { timeout: 0, waitUntil: "networkidle2" });
      await page.waitForSelector('span[data-testid="entityTitle"]');
      const OriginalArtistName = await page.evaluate(() => {
        let name = document.querySelector('span[data-testid="entityTitle"]')
          ? (
              document.querySelector(
                'span[data-testid="entityTitle"]'
              ) as HTMLElement
            ).innerText
          : "";
        return name;
      });

      // Getting Artist Cards
      await page.goto(`${url}/discovered-on`, {
        waitUntil: "networkidle2",
        timeout: 0,
      });
      const cards = await page.waitForSelector(
        'section[aria-label="Discovered on"]',
        { timeout: 30000 }
      );
      console.log(cards ? true : false);

      const OriginalArtistAlbums = await page.evaluate(() => {
        let attribute_album_links: Array<string> = [];
        Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map(
          (item) => {
            const attribute = (item as HTMLElement).getAttribute(
              "aria-labelledby"
            );
            if (attribute !== null) attribute_album_links.push(attribute);
            return attribute;
          }
        );
        return attribute_album_links;
      });

      const playlistInfo = await ScrapePlaylists(page, OriginalArtistAlbums);

      console.log("Original Playlist Cards Found is :: ", playlistInfo.length);

      const AvaliableArtistFound: Array<Artist> = [];
      // final Playlist To return and print into csv
      const FinalPlaylist:Array<playlist> = [];
      
      playlistInfo.map((item)=>{
        FinalPlaylist.push(item)
      });

      playlistInfo.map((artist) => {
        artist.artists.map((item) => {
          if (!AvaliableArtistFound.includes(item)) {
            AvaliableArtistFound.push(item);
          }
        });
      });

      // console.log(`Current Playlist record is ${FinalPlaylist.length}`)
      for (var i = 0; i < AvaliableArtistFound.length; i++) {
        console.log(`Current Playlist record is ${FinalPlaylist.length}`);
        //await page.goto(AvaliableArtistFound)
        // we check if artist has +1k followers
        const elementArtist = AvaliableArtistFound[i];

        try {
          await page.goto(elementArtist.artistUrl, {
            timeout: 0,
            waitUntil: "networkidle2",
          });

          const followers = await page.evaluate(() => {
            return document.querySelector("span.Ydwa1P5GkCggtLlSvphs")
              ? (
                  document.querySelector(
                    "span.Ydwa1P5GkCggtLlSvphs"
                  ) as HTMLSpanElement
                ).innerText
              : 0;
          });
          
          
          if (typeof followers === "number") {
            console.log('Follower Counts undefined  :: ', followers )
            continue;
          } else if (typeof followers === "string") {
            const numFolloweris = eval(followers.split(' ')[0].split(',').join(''))
            console.log(numFolloweris)
            if(numFolloweris < 40000){
              console.log('follower count is lower than 100k');
              continue;
            }else{
              // its a valid Artist 
              console.log(`${elementArtist.artistName} is a valid Artist ... `)
              
               await page.goto(`${elementArtist.artistUrl}/discovered-on`,{timeout:0, waitUntil:"networkidle2"})
               const cards =  await page.evaluate(() => {
                let attribute_album_links: Array<string> = [];
                Array.from(document.querySelectorAll('div[data-encore-id="card"]')).map(
                  (item) => {
                    const attribute = (item as HTMLElement).getAttribute(
                      "aria-labelledby"
                    );
                    if (attribute !== null) attribute_album_links.push(attribute);
                    return attribute;
                  }
                );
                return attribute_album_links;
              });

              console.log('Cards :: ', cards.length);
              const playlistFromConnectedArtist = await ScrapePlaylists(page, cards)
              
              // validating playlists Here ...
              let AfterFinalPlaylist = validatePlaylistSaves(playlistFromConnectedArtist);

              AfterFinalPlaylist.map((playlist)=>{
                FinalPlaylist.push(playlist)
              });
              if(FinalPlaylist.length > 100){
                saveData(`${OriginalArtistName}.csv`,FinalPlaylist)
                break;
              }
            }
          }
        } catch (error) {
          console.log(
            `failed to scrape ${elementArtist.artistName} at ${elementArtist.artistUrl}`
          );
        }
      }
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
    console.log(error);
  }
}
