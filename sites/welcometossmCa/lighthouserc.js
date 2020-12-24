"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://welcometossm.com/",
                "https://welcometossm.com/top-10-reasons/",
                "https://welcometossm.com/learn/education/",
                "https://welcometossm.com/careers/",
                "https://welcometossm.com/immigrate/local-immigration-partnership/",
                "https://welcometossm.com/blog/",
                "https://welcometossm.com/why-these-millennials-left-southern-ontario-for-the-soo-without-looking-back/",
                "https://welcometossm.com/?s=transportation"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
