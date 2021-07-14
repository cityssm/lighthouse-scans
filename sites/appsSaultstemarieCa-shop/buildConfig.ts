import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://apps.saultstemarie.ca/cityapps/shop/products",
    "https://apps.saultstemarie.ca/cityapps/shop/products/tax_receipt",
    "https://apps.saultstemarie.ca/cityapps/shop/checkout"
  ], [    ],
    "appsSaultstemarieCa-shop");
})();
