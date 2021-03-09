"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://www.saulttogether.ca/",
                "https://www.saulttogether.ca/app/bf28b40646b041a294679ce243ad5dc8",
                "https://www.saulttogether.ca/pages/information-for-reopening-ontario",
                "https://www.saulttogether.ca/search",
                "https://survey123.arcgis.com/share/c814ea481f7b411b898ef90bfb795ace",
                "https://www.soomaps.com/archubpages/hub-embed-table.html?feature=5&featureName=Restaurants&returnAddress=https://www.saulttogether.ca/"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
