import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://cityssm.github.io",
    "https://cityssm.github.io/municipal-github-rankings/"
  ], [
      "https://cityssm.github.io/contract-expiration-tracker",
      "https://cityssm.github.io/corporate-records-manager",
      "https://cityssm.github.io/general-licence-manager",
      "https://cityssm.github.io/lottery-licence-manager",
      "https://cityssm.github.io/parking-ticket-system/"
    ],
    "cityssmGithubIO");
})();
