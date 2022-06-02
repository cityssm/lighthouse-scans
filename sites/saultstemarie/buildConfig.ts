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
    [
      // Exclude YouTube videos that fail performance test
      "https://saultstemarie.ca/Newsroom/November-2019/Celebrate-the-season-with-the-annual-Community-Tre.aspx",
      "https://saultstemarie.ca/Newsroom/April-2020/Messages-of-encouragement-from-notable-community-m.aspx",

      // Exclude Google Maps 360 Views that fail performance test
      "https://saultstemarie.ca/Government/City-Council/Council-Chambers.aspx"
    ],
    "saultstemarie");
})();
