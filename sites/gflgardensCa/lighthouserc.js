"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const scannedUrls = require("./urls.json");
const urls = new Set([
    "http://gflgardens.ca/webapps-gardens/eventCalendar_home/index.asp",
    "http://gflgardens.ca/webapps-gardens/eventCalendar/index.asp",
    "http://gflgardens.ca/webapps-gardens/seatingMap_hockey/index.asp",
    "http://gflgardens.ca/webapps-gardens/seatingMap_concert/index.asp"
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
