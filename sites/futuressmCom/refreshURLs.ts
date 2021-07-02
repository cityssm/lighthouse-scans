import { getSiteUrls } from "@cityssm/get-site-urls";
import * as fs from "fs";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {

  const siteUrlsFromProject = await getSiteUrls("https://futuressm.com/index.cfm?fuseaction=content&MenuID=8&PageID=1007", 4);
  const siteUrlsFromAbout = await getSiteUrls("https://futuressm.com/index.cfm?fuseaction=content&menuid=2&pageid=1001", 4);

  const distinctSiteUrls = new Set(siteUrlsFromProject.pages.concat(siteUrlsFromAbout.pages));

  const siteUrls = {
    pages: Array.from(distinctSiteUrls)
  };

  for (let index = 0; index < siteUrls.pages.length; index += 1) {
    const url = siteUrls.pages[index];
    if (url.endsWith(".pdf")) {
      siteUrls.pages.splice(index, 1);
      index -= 1;
    }
  }

  try {
    fs.writeFile("./sites/futuressmCom/urls.json", JSON.stringify(siteUrls), {}, () => {
      console.log("done");
    });
  } catch (err) {
    console.error(err);
  }
})();
