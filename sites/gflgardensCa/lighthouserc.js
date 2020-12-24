"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "http://gflgardens.ca",
                "http://gflgardens.ca/Business-Opportunities/Meeting-Rooms.aspx",
                "http://gflgardens.ca/Events-Ticketing/Seating-Charts.aspx",
                "http://gflgardens.ca/Events-Ticketing/Ways-to-Buy-Tickets.aspx",
                "http://gflgardens.ca/Promoter-Info/Event-History.aspx",
                "http://gflgardens.ca/Events-Ticketing/Events-Calendar.aspx",
                "http://gflgardens.ca/Events-Ticketing/Events-Calendar/2020/03-mar/Soo-Greyhounds-vs-Kingston-Frontenacs.aspx"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
