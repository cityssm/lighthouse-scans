import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://www.saulttourism.com/",

        // Main Pages
        "https://www.saulttourism.com/stay",
        "https://www.saulttourism.com/see-do",
        "https://www.saulttourism.com/eat-drink",
        "https://www.saulttourism.com/plan-your-trip",
        "https://www.saulttourism.com/your-trip",
        "https://www.saulttourism.com/contact-us"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
