import { writeConfig } from "../../utils.js";
(async () => {
    await writeConfig([
        "https://ca.apm.activecommunities.com/saultstemarie/Home",
        "https://ca.apm.activecommunities.com/saultstemarie/Activity_Search",
        "https://ca.apm.activecommunities.com/saultstemarie/Reserve_Options",
        "https://ca.apm.activecommunities.com/saultstemarie/Membership",
        "https://ca.apm.activecommunities.com/saultstemarie/ActiveNet_Calendar"
    ], [], "activecommunities");
})();
