import { getSiteUrls } from "@cityssm/get-site-urls";
import * as fs from "fs";


(async () => {

  const siteUrls = await getSiteUrls("https://saultstemarie.ca/", 2);

  for (let index = 0; index < siteUrls.pages.length; index += 1) {
    const url = siteUrls.pages[index];
    if (url.endsWith(".pdf")) {
      siteUrls.pages.splice(index, 1);
      index -= 1;
    }
  }

  try {
    fs.writeFile("./sites/saultstemarieCA/urls.json", JSON.stringify(siteUrls), {}, () => {
      console.log("done");
    });
  } catch (err) {
    console.error(err);
  }
})();
