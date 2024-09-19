import { Page } from "puppeteer";
import { TreatUrl } from "./utils";
// scrpae Plaulists for an artits
import { playlist } from "./utils";

export async function ScrapePlaylists(
  page: Page,
  albums: Array<string>
): Promise<Array<playlist>> {
  console.log(albums.length);
  let playlists: Array<playlist> = [];
  for (var i = 0; i < albums.length; i++) {
    const album = albums[i];
    try {
      await page.goto(TreatUrl(album), {
        timeout: 0,
        waitUntil: "networkidle2",
      });
      await page.waitForSelector('span[data-testid="entityTitle"]', {
        timeout: 5000,
      });
      const playlistinfo = await page.evaluate(() => {
        const playlistCreator = document.querySelector(
          "a[data-testid=creator-link]"
        )
          ? (document.querySelector(
              "a[data-testid=creator-link]"
            ) as HTMLAnchorElement)
          : null;
        if (playlistCreator === null) {
          return null;
        } else if (playlistCreator.innerText === "Spotify") {
          return null;
        }

        let listners: string = "";
        const title = document.querySelector('span[data-testid="entityTitle"]')
          ? (
              document.querySelector(
                'span[data-testid="entityTitle"]'
              ) as HTMLElement
            ).innerText
          : "";
        Array.from(document.querySelectorAll("span")).map((item) => {
          if (item.innerText.includes("saves")) {
            listners = item.innerText;
          }
        });
        const art3:Array<{artistName:string; artistUrl:string}> = [];
        const art = Array.from(
          document.querySelectorAll('div[data-testid="tracklist-row"]')
        ).map((item) => {
          return {
            artistsName: (item as HTMLElement).innerText.split("\n")[1],
            artistUrl: item.querySelectorAll("a")[1].href,
          };
        });

        const artSet = new Set(art3);
        const artists = [...artSet];
        return {
          title,
          listners,
          artists,
          url: document.URL,
          playlistCreator: playlistCreator.innerText,
          playlistCreatorLink: playlistCreator.href,
        };
      });

      if (playlistinfo === null) {
        console.log("playlist was made by spotify");
      } else {
        console.log(playlistinfo);
        playlists.push(playlistinfo);
      }
    } catch (error) {
      return [] as Array<playlist>;
    }
  }
  return playlists;
}
