import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://shapethesault.ca/",

        // Pages
        "https://shapethesault.ca/focus-areas",
        "https://shapethesault.ca/rural-and-agriculture",
        "https://shapethesault.ca/events-%26-news",
        "https://shapethesault.ca/land-use",
        "https://shapethesault.ca/james-street",
        "https://shapethesault.ca/faq-%26-feedback"

      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
