import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Buy Tickets
        "https://gflgardens.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=SC&linkID=global-steelback&shopperContext=&caller=&appCode=",

        // Promotions
        "https://gflgardens.evenue.net/cgi-bin/ncommerce3/EVExecMacro?linkID=global-steelback&evm=prmo&RSRC=&RDAT=&caller=PR"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
