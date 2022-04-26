import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "http://shapethesault.ca/",
    "http://shapethesault.ca/focus-areas",
    "http://shapethesault.ca/events-%26-news",
    "http://shapethesault.ca/land-use",
    "http://shapethesault.ca/james-street"
  ], [
    "http://shapethesault.ca/home"
  ],
  [],
    "shapethesault");
})();
