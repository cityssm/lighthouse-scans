import { getSiteUrls } from "@cityssm/get-site-urls";
import * as fs from "fs";


(async () => {

  const siteUrls = await getSiteUrls("https://saultstemarie.ca/", 3);

  try {
    fs.writeFile("./sites/saultstemarieCA/urls.json", JSON.stringify(siteUrls), {}, () => {
      console.log("done");
    });
  } catch (err) {
    console.error(err);
  }
})();
