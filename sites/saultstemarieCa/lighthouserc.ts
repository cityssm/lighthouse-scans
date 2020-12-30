import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://saultstemarie.ca",

        // Pages
        "https://saultstemarie.ca/Stay-Connected.aspx",
        "https://saultstemarie.ca/City-Hall/COVID-19-Affected-City-Services-and-Facilities.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Routes-and-Schedules.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Fares-and-Passes.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Corporate-Services/Human-Resources/Job-Opportunities.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Fire-Services/Prevention-and-Public-Education.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Waste-Management/Collection-Calendar.aspx",

        // Forms
        "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Planning-Enterprise-Services/Accessibility/Report-a-Barrier.aspx",
        "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Service-Requests.aspx",

        // News
        "https://saultstemarie.ca/Newsroom.aspx",
        "https://saultstemarie.ca/Newsroom/December-2020/Season%E2%80%99s-greetings-from-Mayor-Provenzano.aspx",

        // Search Results
        "https://saultstemarie.ca/Search.aspx?searchtext=parks"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
