import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://shapethesault.ca/",
    "https://shapethesault.ca/focus-areas",
    "https://shapethesault.ca/events-%26-news",
    "https://shapethesault.ca/land-use",
    "https://shapethesault.ca/james-street",
    "https://shapethesault.ca/faq-%26-feedback"
  ], [
    "https://shapethesault.ca/"
  ],
    "shapethesault");
})();
