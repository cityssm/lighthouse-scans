import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://apps.saultstemarie.ca/cityapps/shop/products",
    "https://apps.saultstemarie.ca/cityapps/shop/products/tax_receipt",
    "https://apps.saultstemarie.ca/cityapps/shop/products/ticket_offenceNotice",
    "https://apps.saultstemarie.ca/cityapps/shop/products/ticket_noticeOfFine",
    "https://apps.saultstemarie.ca/cityapps/shop/products/ticket_parking",
    "https://apps.saultstemarie.ca/cityapps/shop/checkout"
  ], [], [],
    "appsSaultstemarieCa-shop");
})();
