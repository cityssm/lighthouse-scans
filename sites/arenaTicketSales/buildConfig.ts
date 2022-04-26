import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://gflgardens.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=SC&linkID=global-steelback&shopperContext=&caller=&appCode=",
    "https://gflgardens.evenue.net/cgi-bin/ncommerce3/EVExecMacro?linkID=global-steelback&evm=prmo&RSRC=&RDAT=&caller=PR"
  ], [], [],
    "arenaTicketSales");
})();
