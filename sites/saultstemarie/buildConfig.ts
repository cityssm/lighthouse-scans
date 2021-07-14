import { writeConfig } from "../../utils.js";

(async () => {

  await writeConfig([
    "https://saultstemarie.ca",
    "https://saultstemarie.ca/Search.aspx?searchtext=parks",
    "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
    "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
    "https://saultstemarie.ca/webapps/parabusCalendar.asp",
    "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"
  ], [
    "https://saultstemarie.ca"
  ],
    "saultstemarie");
})();
