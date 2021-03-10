"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://shapethesault.ca/",
                "https://shapethesault.ca/focus-areas",
                "https://shapethesault.ca/rural-and-agriculture",
                "https://shapethesault.ca/events-%26-news",
                "https://shapethesault.ca/land-use",
                "https://shapethesault.ca/james-street",
                "https://shapethesault.ca/faq-%26-feedback"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
