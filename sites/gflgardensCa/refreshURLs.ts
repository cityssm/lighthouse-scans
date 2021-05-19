import { getSiteUrls } from "@cityssm/get-site-urls";
import * as fs from "fs";


(async () => {

  const siteUrls = await getSiteUrls("http://gflgardens.ca/", 2);

  try {
    fs.writeFile("./sites/gflgardensCa/urls.json", JSON.stringify(siteUrls), {}, () => {
      console.log("done");
    });
  } catch (err) {
    console.error(err);
  }
})();
