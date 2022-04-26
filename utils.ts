import * as fs from "fs";
import { getSiteUrls } from "@cityssm/get-site-urls";

import * as config from "./config.js";


const shuffleArray = (array: string[]) => {

  for (let index = array.length - 1; index > 0; index--) {
    const index2 = Math.floor(Math.random() * (index + 1));
    [array[index], array[index2]] = [array[index2], array[index]];
  }

  return array;
};


export const writeConfig = async (
  urlsToInclude: string[],
  urlsToSearch: string[],
  urlsToExclude: string[],
  outputFolder: string): Promise<boolean> => {

  /*
   * Build URLs
   */

  const allURLs: string[] = [...urlsToInclude, ...urlsToSearch];

  for (const url of urlsToSearch) {
    try {
      console.log("Searching URL: " + url);
      const siteURLs = await getSiteUrls(url, config.getSiteURLs_maxDepth);
      console.log(siteURLs);
      allURLs.push(...siteURLs.pages);
    } catch {
      console.error("Error searching URL: " + url);
    }
  }

  let distinctURLs: string[] = [...(new Set(allURLs))];

  for (let index = 0; index < distinctURLs.length; index += 1) {
    const url = distinctURLs[index];
    if (url.endsWith(".pdf") || urlsToExclude.includes(url)) {
      console.warn("Removing URL: " + url);
      distinctURLs.splice(index, 1);
      index -= 1;
    }
  }

  if (distinctURLs.length > config.collectConfig_urlLimit) {
    console.log("Reducing " + distinctURLs.length + " URLs.");
    distinctURLs = shuffleArray(distinctURLs).slice(0, config.collectConfig_urlLimit);
  }

  /*
   * Construct object
   */

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

  /*
   * Output
   */

  try {
    fs.writeFile("./sites/" + outputFolder + "/lighthouserc.json", JSON.stringify(output), {}, () => {
      console.log("Config written with " + distinctURLs.length.toString() + " URLs.");
      return true;
    });
  } catch (error) {
    console.error(error);
    return false;
  }
};
