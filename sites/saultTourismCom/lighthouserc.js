"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://www.saulttourism.com/",
                "https://www.saulttourism.com/stay",
                "https://www.saulttourism.com/see-do",
                "https://www.saulttourism.com/eat-drink",
                "https://www.saulttourism.com/plan-your-trip",
                "https://www.saulttourism.com/your-trip",
                "https://www.saulttourism.com/contact-us"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
