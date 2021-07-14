import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    // Home page
    "https://www.saulttogether.ca/",

    // Map
    "https://www.saulttogether.ca/app/bf28b40646b041a294679ce243ad5dc8",

    // Subpages
    "https://www.saulttogether.ca/pages/information-for-reopening-ontario",
    "https://www.saulttogether.ca/search",

    // Application
    "https://survey123.arcgis.com/share/c814ea481f7b411b898ef90bfb795ace",

    // Business Directory
    "https://www.soomaps.com/archubpages/hub-embed-table.html?feature=5&featureName=Restaurants&returnAddress=https://www.saulttogether.ca/"

  ], [
      "https://www.saulttogether.ca/"
    ],
    "saultTogether");
})();
