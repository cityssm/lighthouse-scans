import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://saultnetwork.ca",
    "https://saultnetwork.ca/about/",
    "https://saultnetwork.ca/blog/",
    "https://saultnetwork.ca/contact-us/",
    "https://saultnetwork.ca/create-a-profile/"
  ], [
      "https://saultnetwork.ca"
    ],
    [],
    "saultNetwork");
})();
