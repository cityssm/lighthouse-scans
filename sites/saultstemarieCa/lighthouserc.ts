import { assertConfig, uploadConfig } from "../config";

import * as scannedUrls from "./urls.json";

const urls = new Set<string>([
  // Search Results
  "https://saultstemarie.ca/Search.aspx?searchtext=parks",

  // Interactive Pages
  "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
  "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
  "https://saultstemarie.ca/webapps/parabusCalendar.asp",
  "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"
]);

scannedUrls.pages.forEach(urls.add, urls);
scannedUrls.errors.forEach(urls.add, urls);

module.exports = {
  ci: {
    collect: {
      url: Array.from(urls),
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
