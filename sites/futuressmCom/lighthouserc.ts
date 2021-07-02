import { assertConfig, uploadConfig } from "../config";

import * as scannedUrls from "./urls.json";

const urls = new Set<string>([
  "https://futuressm.com/"
]);

scannedUrls.pages.forEach(urls.add, urls);

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
