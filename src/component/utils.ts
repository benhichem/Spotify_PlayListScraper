export function TreatUrl(cardInfo: string): string {
  let id = cardInfo.split(':')[2].split('-')[0]
  return `https://open.spotify.com/playlist/${id}`
}

// this is bad don't do this kids
export type Artist = {
  artistName:string | null; 
  artistUrl:string | null;
}

export type playlist = {
  title: string;
  listners: string;
  artists: Array<Artist>;
  url: string;
  playlistCreator:string; 
  playlistCreatorLink:string;
}

export function validatePlaylistSaves(PlayLists: Array<playlist>): Array<playlist> {

  const returnplaylist: Array<playlist> = []

  for (let index = 0; index < PlayLists.length; index++) {
    const element = PlayLists[index];
    const savesNumPhaseOne = element.listners.split('saves')[0]
    const saveNumPhaseTwo = savesNumPhaseOne.split(',')
    if (saveNumPhaseTwo.length === 2) {
      let currentFollowersCountIs = saveNumPhaseTwo[0].trim().concat(saveNumPhaseTwo[1].trim())
      console.log(currentFollowersCountIs)
      const savesNum = eval(currentFollowersCountIs)
      console.log(savesNum, "saves for ::", element.url)
      if (savesNum > 1000) {
        console.log('valid playlist :: ', element.title);
        returnplaylist.push(element)
      }
    } else {
      console.log(saveNumPhaseTwo)
      console.log("Doesn't match requirements :: ", element.title)
    }
  }
  return returnplaylist

}

import { json2csv } from "json-2-csv"
import fs from "node:fs"
export function saveData(path: string, data: Array<playlist>) {
  // we need to save artists alone, and also we need to save the playlists alone aswell
  //const artits: Array<string> = []
  const playlists: Array<{url:string; playlistName:string; saves:string; playlistOwner:string;playlistOwnerProfile:string;}> = []
  try {
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      /* 
      element.artists.map((item) => {
        artits.push(item)
      }) */
      playlists.push({
        url: element.url,
        playlistName: element.title,
        saves: element.listners,
        playlistOwner:element.playlistCreator,
        playlistOwnerProfile:element.playlistCreatorLink
        
      })
    }
    let data2 = json2csv(playlists)
    fs.writeFile(path, data2, { flag: "a" }, () => {
      console.log('Finished Writing File ... ')
    })
    } catch (error) {
    console.log(error)
  }
}

