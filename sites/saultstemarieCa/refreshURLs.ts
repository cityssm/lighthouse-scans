import { getSiteUrls } from "@cityssm/get-site-urls";
import * as fs from "fs";


(async() => {

  const links = await getSiteUrls("https://saultstemarie.ca/");

  try {
    fs.writeFileSync("./sites/saultstemarieCA/urls.json", JSON.stringify(links));
  } catch (err) {
    console.error(err);
  }
})();
