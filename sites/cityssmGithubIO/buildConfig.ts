import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://cityssm.github.io/",
    "https://cityssm.github.io/corporate-records-manager/",
    "https://cityssm.github.io/lottery-licence-manager/"
  ], [
      "https://cityssm.github.io/corporate-records-manager/",
      "https://cityssm.github.io/lottery-licence-manager/"
    ],
    "cityssmGithubIO");
})();
