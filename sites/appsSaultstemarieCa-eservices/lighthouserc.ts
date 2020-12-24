import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://apps.saultstemarie.ca/eservices/",

        // Pages
        "https://apps.saultstemarie.ca/eservices/disclaimer.asp",
        "https://apps.saultstemarie.ca/eservices/help.asp",
        "https://apps.saultstemarie.ca/eservices/ticket-home.asp"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
