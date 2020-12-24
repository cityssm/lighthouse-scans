"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://apps.saultstemarie.ca/cityapps/",
                "https://apps.saultstemarie.ca/cityapps/builderServices-bookInspection.asp",
                "https://apps.saultstemarie.ca/cityapps/builderServices-inspectionChecklists.asp",
                "https://apps.saultstemarie.ca/cityapps/builderServices-blankChecklist.asp?c=140",
                "https://apps.saultstemarie.ca/cityapps/tipsAndTricks.asp"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
