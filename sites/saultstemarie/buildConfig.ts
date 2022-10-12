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
    ], [
      // Exclude pages with YouTube videos that fail performance tests
      "https://saultstemarie.ca/Government/City-Departments/Community-Development-Enterprise-Services/FutureSSM/Film-Office.aspx",
      "https://saultstemarie.ca/Government/City-Departments/Corporate-Services/City-Clerk/Municipal-Election/Election.aspx",
      "https://saultstemarie.ca/Newsroom/April-2020/Messages-of-encouragement-from-notable-community-m.aspx",
      "https://saultstemarie.ca/Newsroom/November-2019/Celebrate-the-season-with-the-annual-Community-Tre.aspx",
      "https://saultstemarie.ca/Newsroom/October-2019/Mayor-for-a-Day-contest-winner-announced.aspx",

      // Exclude pages with Google Maps 360 Views that fail performance tests
      "https://saultstemarie.ca/Government/City-Council/Council-Chambers.aspx"
    ],
    "saultstemarie");
})();
