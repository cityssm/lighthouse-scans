"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://saultnetwork.ca",
                "https://saultnetwork.ca/about/",
                "https://saultnetwork.ca/blog/",
                "https://saultnetwork.ca/contact-us/",
                "https://saultnetwork.ca/create-a-profile/"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
