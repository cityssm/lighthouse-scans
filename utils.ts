import * as fs from "fs";
import { getSiteUrls } from "@cityssm/get-site-urls";

import * as config from "./config.js";


export const writeConfig = async (
  urlsToInclude: string[],
  urlsToSearch: string[],
  outputFolder: string): Promise<boolean> => {

  /*
   * Build URLs
   */

  const allURLs: string[] = [...urlsToInclude, ...urlsToSearch];

  for (const url of urlsToSearch) {
    try {
      const siteURLs = await getSiteUrls(url, 2);
      allURLs.push(...siteURLs.pages);
    } catch {
      console.log("Error searching URL: " + url);
    }
  }

  const distinctURLs: string[] = [...(new Set(allURLs))];

  for (let index = 0; index < distinctURLs.length; index += 1) {
    const url = distinctURLs[index];
    if (url.endsWith(".pdf")) {
      distinctURLs.splice(index, 1);
      index -= 1;
    }
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
