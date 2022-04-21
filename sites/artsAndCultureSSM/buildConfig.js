import { writeConfig } from "../../utils.js";
(async () => {
    await writeConfig([
        "https://artsandculturessm.ca/",
        "https://artsandculturessm.ca/events-activities/",
        "https://artsandculturessm.ca/community/",
        "https://artsandculturessm.ca/resources/",
        "https://artsandculturessm.ca/venues-performance-spaces/",
        "https://artsandculturessm.ca/contact/"
    ], [
        "https://artsandculturessm.ca/",
        "https://artsandculturessm.ca/events-activities/",
        "https://artsandculturessm.ca/community/"
    ], "artsAndCultureSSM");
})();
