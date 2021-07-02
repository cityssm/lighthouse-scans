"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const scannedUrls = require("./urls.json");
const urls = new Set([
    "https://futuressm.com/"
]);
scannedUrls.pages.forEach(urls.add, urls);
module.exports = {
    ci: {
        collect: {
            url: Array.from(urls),
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
