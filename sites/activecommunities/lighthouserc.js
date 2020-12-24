"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://ca.apm.activecommunities.com/saultstemarie/Home",
                "https://ca.apm.activecommunities.com/saultstemarie/Activity_Search",
                "https://ca.apm.activecommunities.com/saultstemarie/Reserve_Options",
                "https://ca.apm.activecommunities.com/saultstemarie/Membership",
                "https://ca.apm.activecommunities.com/saultstemarie/ActiveNet_Calendar"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
