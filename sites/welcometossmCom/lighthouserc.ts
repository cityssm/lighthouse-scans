import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://welcometossm.com/",

        // Pages
        "https://welcometossm.com/top-10-reasons/",
        "https://welcometossm.com/learn/education/",
        "https://welcometossm.com/careers/",
        "https://welcometossm.com/immigrate/local-immigration-partnership/",

        // Blog
        "https://welcometossm.com/blog/",
        "https://welcometossm.com/why-these-millennials-left-southern-ontario-for-the-soo-without-looking-back/",

        // Search Results
        "https://welcometossm.com/?s=transportation"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
