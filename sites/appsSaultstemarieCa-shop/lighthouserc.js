"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://apps.saultstemarie.ca/cityapps/shop/products",
                "https://apps.saultstemarie.ca/cityapps/shop/products/tax_receipt",
                "https://apps.saultstemarie.ca/cityapps/shop/checkout"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
