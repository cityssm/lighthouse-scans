import * as fs from "fs";
import { getSiteUrls } from "@cityssm/get-site-urls";
import * as config from "./config.js";
const shuffleArray = (array) => {
    for (let index = array.length - 1; index > 0; index--) {
        const index2 = Math.floor(Math.random() * (index + 1));
        const temporary = array[index];
        array[index] = array[index2];
        array[index2] = temporary;
    }
    return array;
};
export const writeConfig = async (urlsToInclude, urlsToSearch, outputFolder) => {
    const allURLs = [...urlsToInclude, ...urlsToSearch];
    for (const url of urlsToSearch) {
        try {
            const siteURLs = await getSiteUrls(url, 2);
            allURLs.push(...siteURLs.pages);
        }
        catch (_a) {
            console.log("Error searching URL: " + url);
        }
    }
    let distinctURLs = [...(new Set(allURLs))];
    for (let index = 0; index < distinctURLs.length; index += 1) {
        const url = distinctURLs[index];
        if (url.endsWith(".pdf")) {
            distinctURLs.splice(index, 1);
            index -= 1;
        }
    }
    if (distinctURLs.length > config.collectConfig_urlLimit) {
        console.log("Reducing " + distinctURLs.length + " URLs.");
        distinctURLs = shuffleArray(distinctURLs).slice(0, config.collectConfig_urlLimit);
    }
    const output = {
        "ci": {
            "collect": {
                url: distinctURLs,
                numberOfRuns: config.collectConfig_numberOfRuns
            },
            assert: config.assertConfig,
            upload: config.uploadConfig
        }
    };
    try {
        fs.writeFile("./sites/" + outputFolder + "/lighthouserc.json", JSON.stringify(output), {}, () => {
            console.log("Config written with " + distinctURLs.length.toString() + " URLs.");
            return true;
        });
    }
    catch (error) {
        console.error(error);
        return false;
    }
};
