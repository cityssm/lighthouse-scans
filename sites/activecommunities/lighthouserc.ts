import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://ca.apm.activecommunities.com/saultstemarie/Home",

        // Pages
        "https://ca.apm.activecommunities.com/saultstemarie/Activity_Search",
        "https://ca.apm.activecommunities.com/saultstemarie/Reserve_Options",
        "https://ca.apm.activecommunities.com/saultstemarie/Membership",
        "https://ca.apm.activecommunities.com/saultstemarie/ActiveNet_Calendar"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
