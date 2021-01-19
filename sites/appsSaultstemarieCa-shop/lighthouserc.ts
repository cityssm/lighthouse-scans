import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://apps.saultstemarie.ca/cityapps/shop/products",
        "https://apps.saultstemarie.ca/cityapps/shop/products/tax_receipt",
        "https://apps.saultstemarie.ca/cityapps/shop/checkout"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
