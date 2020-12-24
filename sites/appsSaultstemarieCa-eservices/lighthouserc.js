"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://apps.saultstemarie.ca/eservices/",
                "https://apps.saultstemarie.ca/eservices/disclaimer.asp",
                "https://apps.saultstemarie.ca/eservices/help.asp",
                "https://apps.saultstemarie.ca/eservices/ticket-home.asp"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
