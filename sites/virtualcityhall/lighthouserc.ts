import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://myfinance.saultstemarie.ca/vch/",

        // Accounts
        "https://myfinance.saultstemarie.ca/VCH/city/mycity/login.aspx",
        "https://myfinance.saultstemarie.ca/VCH/city/contact/CreateExistingCustomer.aspx",

        // Pages
        "https://myfinance.saultstemarie.ca/VCH/city/propsearch/pigeneralinquiry.aspx",
        "https://myfinance.saultstemarie.ca/VCH/city/propsearch/txassessmentresponse.aspx?rollno=020044010000000"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
