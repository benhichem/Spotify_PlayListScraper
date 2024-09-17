"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreatUrl = TreatUrl;
exports.validatePlaylist = validatePlaylist;
exports.saveData = saveData;
function TreatUrl(cardInfo) {
    let id = cardInfo.split(':')[2].split('-')[0];
    return `https://open.spotify.com/playlist/${id}`;
}
function validatePlaylist(PlayLists) {
    const returnplaylist = [];
    for (let index = 0; index < PlayLists.length; index++) {
        const element = PlayLists[index];
        const savesNumPhaseOne = element.listners.split('saves')[0];
        const saveNumPhaseTwo = savesNumPhaseOne.split(',');
        if (saveNumPhaseTwo.length === 2) {
            let currentFollowersCountIs = saveNumPhaseTwo[0].trim().concat(saveNumPhaseTwo[1].trim());
            console.log(currentFollowersCountIs);
            const savesNum = eval(currentFollowersCountIs);
            console.log(savesNum, "saves for ::", element.url);
            if (savesNum > 1000) {
                console.log('valid playlist :: ', element.title);
                returnplaylist.push(element);
            }
        }
        else {
            console.log(saveNumPhaseTwo);
            console.log("Doesn't match requirements :: ", element.title);
        }
    }
    return returnplaylist;
}
const json_2_csv_1 = require("json-2-csv");
const node_fs_1 = __importDefault(require("node:fs"));
function saveData(path, data) {
    // we need to save artists alone, and also we need to save the playlists alone aswell
    const artits = [];
    const playlists = [];
    try {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            element.artists.map((item) => {
                artits.push(item);
            });
            playlists.push({
                url: element.url,
                playlistName: element.title,
                saves: element.listners
            });
        }
        let data2 = (0, json_2_csv_1.json2csv)(playlists);
        node_fs_1.default.writeFile(path, data2, { flag: "a" }, () => {
            console.log('Finished Writing File ... ');
        });
        node_fs_1.default.writeFile("artists.txt", JSON.stringify(artits), () => {
            console.log('Finished Writing Playlist Artists Names ... ');
        });
    }
    catch (error) {
        console.log(error);
    }
}
