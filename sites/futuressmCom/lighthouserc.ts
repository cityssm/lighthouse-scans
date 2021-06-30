import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://futuressm.com/"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
