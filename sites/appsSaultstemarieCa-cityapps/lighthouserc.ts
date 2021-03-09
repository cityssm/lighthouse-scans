import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://apps.saultstemarie.ca/cityapps/",

        // Pages
        "https://apps.saultstemarie.ca/cityapps/account-create.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-bookInspection.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-inspectionChecklists.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-blankChecklist.asp?c=140",
        "https://apps.saultstemarie.ca/cityapps/tipsAndTricks.asp"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
