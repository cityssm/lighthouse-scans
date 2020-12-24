"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://myfinance.saultstemarie.ca/vch/",
                "https://myfinance.saultstemarie.ca/VCH/city/mycity/login.aspx",
                "https://myfinance.saultstemarie.ca/VCH/city/contact/CreateExistingCustomer.aspx",
                "https://myfinance.saultstemarie.ca/VCH/city/propsearch/pigeneralinquiry.aspx",
                "https://myfinance.saultstemarie.ca/VCH/city/propsearch/txassessmentresponse.aspx?rollno=020044010000000"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
