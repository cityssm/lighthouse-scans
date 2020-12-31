import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Incident Form
        "https://clearrisk.tfaforms.net/28"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
