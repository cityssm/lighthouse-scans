import { assertConfig, uploadConfig } from "../config";

import * as scannedUrls from "./urls.json";

const urls = new Set<string>([
  // Interactive Pages
  "http://gflgardens.ca/webapps-gardens/eventCalendar_home/index.asp",
  "http://gflgardens.ca/webapps-gardens/eventCalendar/index.asp",
  "http://gflgardens.ca/webapps-gardens/seatingMap_hockey/index.asp",
  "http://gflgardens.ca/webapps-gardens/seatingMap_concert/index.asp"
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
