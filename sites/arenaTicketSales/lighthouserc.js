"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://gflgardens.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=SC&linkID=global-steelback&shopperContext=&caller=&appCode=",
                "https://gflgardens.evenue.net/cgi-bin/ncommerce3/EVExecMacro?linkID=global-steelback&evm=prmo&RSRC=&RDAT=&caller=PR"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
