import { writeConfig } from "../../utils.js";
(async () => {
    await writeConfig([
        "http://gflgardens.ca",
        "http://gflgardens.ca/webapps-gardens/eventCalendar_home/index.asp",
        "http://gflgardens.ca/webapps-gardens/eventCalendar/index.asp",
        "http://gflgardens.ca/webapps-gardens/seatingMap_hockey/index.asp",
        "http://gflgardens.ca/webapps-gardens/seatingMap_concert/index.asp"
    ], [
        "http://gflgardens.ca"
    ], "gflgardens");
})();
