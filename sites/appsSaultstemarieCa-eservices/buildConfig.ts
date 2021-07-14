import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://apps.saultstemarie.ca/eservices/",
    "https://apps.saultstemarie.ca/eservices/disclaimer.asp",
    "https://apps.saultstemarie.ca/eservices/help.asp",
    "https://apps.saultstemarie.ca/eservices/ticket-home.asp"
  ], [    ],
    "appsSaultstemarieCa-eservices");
})();
