import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "http://gflgardens.ca",

        // Pages
        "http://gflgardens.ca/Business-Opportunities/Meeting-Rooms.aspx",
        "http://gflgardens.ca/Events-Ticketing/Seating-Charts.aspx",
        "http://gflgardens.ca/Events-Ticketing/Ways-to-Buy-Tickets.aspx",
        "http://gflgardens.ca/Promoter-Info/Event-History.aspx",

        // Events
        "http://gflgardens.ca/Events-Ticketing/Events-Calendar.aspx",
        "http://gflgardens.ca/Events-Ticketing/Events-Calendar/2020/03-mar/Soo-Greyhounds-vs-Kingston-Frontenacs.aspx"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
