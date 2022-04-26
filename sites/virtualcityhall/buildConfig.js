import { writeConfig } from "../../utils.js";
(async () => {
    await writeConfig([
        "https://myfinance.saultstemarie.ca/vch/",
        "https://myfinance.saultstemarie.ca/VCH/city/mycity/login.aspx",
        "https://myfinance.saultstemarie.ca/VCH/city/contact/CreateExistingCustomer.aspx",
        "https://myfinance.saultstemarie.ca/VCH/city/propsearch/pigeneralinquiry.aspx",
        "https://myfinance.saultstemarie.ca/VCH/city/propsearch/txassessmentresponse.aspx?rollno=020044010000000"
    ], [
        "https://myfinance.saultstemarie.ca/vch/"
    ], [], "virtualcityhall");
})();
