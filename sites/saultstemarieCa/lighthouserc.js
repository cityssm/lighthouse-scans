"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://saultstemarie.ca",
                "https://saultstemarie.ca/Stay-Connected.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Routes-and-Schedules.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Community-Services/Transit/Bus-Fares-and-Passes.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Corporate-Services/Human-Resources/Job-Opportunities.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Fire-Services/Prevention-and-Public-Education.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Waste-Management/Collection-Calendar.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Community-Development-Enterprise-Services/Planning-Enterprise-Services/Accessibility/Report-a-Barrier.aspx",
                "https://saultstemarie.ca/City-Hall/City-Departments/Public-Works-Engineering-Services/Public-Works/Service-Requests.aspx",
                "https://saultstemarie.ca/Newsroom.aspx",
                "https://saultstemarie.ca/Newsroom/December-2020/Season%E2%80%99s-greetings-from-Mayor-Provenzano.aspx",
                "https://saultstemarie.ca/Search.aspx?searchtext=parks"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
