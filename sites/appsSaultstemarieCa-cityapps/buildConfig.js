import { writeConfig } from "../../utils.js";
(async () => {
    await writeConfig([
        "https://apps.saultstemarie.ca/cityapps/",
        "https://apps.saultstemarie.ca/cityapps/account-create.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-bookInspection.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-inspectionChecklists.asp",
        "https://apps.saultstemarie.ca/cityapps/builderServices-blankChecklist.asp?c=140",
        "https://apps.saultstemarie.ca/cityapps/tipsAndTricks.asp"
    ], [], [], "appsSaultstemarieCa-cityapps");
})();
