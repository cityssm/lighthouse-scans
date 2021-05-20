"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const scannedUrls = require("./urls.json");
const urls = new Set([
    "https://saultstemarie.ca/Search.aspx?searchtext=parks",
    "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
    "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
    "https://saultstemarie.ca/webapps/parabusCalendar.asp",
    "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"
]);
scannedUrls.pages.forEach(urls.add, urls);
module.exports = {
    ci: {
        collect: {
            url: Array.from(urls),
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
