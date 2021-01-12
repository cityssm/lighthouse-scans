"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://saultstemarie.ca",
                "https://saultstemarie.ca/Stay-Connected.aspx",
                "https://saultstemarie.ca/City-Hall/COVID-19-Affected-City-Services-and-Facilities.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Recreation-and-Culture/Waterfront-Walkway.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Routes-and-Schedules.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Fares-and-Passes.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Corporate-Services/Human-Resources/Job-Opportunities.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Finance/Purchasing/Tenders-and-Proposals.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Fire-Services/Prevention-and-Public-Education.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Legal/City-By-laws.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Waste-Management/Collection-Calendar.aspx",
                "https://saultstemarie.ca/Feedback.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Planning-Enterprise-Services/Accessibility/Report-a-Barrier.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Service-Requests.aspx",
                "https://saultstemarie.ca/Newsroom.aspx",
                "https://saultstemarie.ca/Newsroom/December-2020.aspx",
                "https://saultstemarie.ca/Newsroom/December-2020/Season%E2%80%99s-greetings-from-Mayor-Provenzano.aspx",
                "https://saultstemarie.ca/Search.aspx?searchtext=parks",
                "https://saultstemarie.ca/webapps/meetingMinutes.asp?type=council",
                "https://saultstemarie.ca/webapps/corporateCalendar.asp?e=true",
                "https://saultstemarie.ca/webapps/parabusCalendar.asp",
                "https://saultstemarie.ca/webapps/parksAndPlaygrounds.asp"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
