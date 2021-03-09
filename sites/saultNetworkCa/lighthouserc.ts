import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://saultnetwork.ca",

        // Pages
        "https://saultnetwork.ca/about/",
        "https://saultnetwork.ca/blog/",
        "https://saultnetwork.ca/contact-us/",
        "https://saultnetwork.ca/create-a-profile/"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
