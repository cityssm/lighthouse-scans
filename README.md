# lighthouse-scans

A script to scan the City's websites for performance, accessibility, and best practice issues.

Uses [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
to regularly audit websites that the City of Sault Ste. Marie is responsible for.

## Run It Locally

```bash
npm install
npm install -g @lhci/cli npm-run-all
npm test
```

## Latest Scan Results

| Website                                                                                       | Test                                        | Latest Results                                                                                                                                                                                                                              |
| --------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SaultSteMarie.ca](https://saultstemarie.ca/)                                                 | `npm run test:website:saultstemarie`       | [![SaultSteMarie.ca](https://github.com/cityssm/lighthouse-scans/workflows/SaultSteMarie.ca/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultSteMarie.ca)                                              |
| [GFLGardens.ca](http://gflgardens.ca/)                                                        | `npm run test:website:gflgardens`          | [![GFLGardens.ca](https://github.com/cityssm/lighthouse-scans/workflows/GFLGardens.ca/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AGFLGardens.ca)                                                       |
| [WelcomeToSSM.ca](https://welcometossm.com/)                                                  | `npm run test:website:welcometossm`        | [![WelcomeToSSM.ca](https://github.com/cityssm/lighthouse-scans/workflows/WelcomeToSSM.ca/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AWelcomeToSSM.ca)                                                 |
| [My Sault Ste. Marie eServices](https://apps.saultstemarie.ca/eservices/)                     | `npm run test:eservices:apps-eservices`     | [![apps.saultstemarie.ca-eservices](https://github.com/cityssm/lighthouse-scans/workflows/apps.saultstemarie.ca-eservices/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-eservices) |
| [Sault Ste. Marie Building Permit Services](https://apps.saultstemarie.ca/cityapps/index.asp) | `npm run test:eservices:apps-cityapps`      | [![apps.saultstemarie.ca-cityapps](https://github.com/cityssm/lighthouse-scans/workflows/apps.saultstemarie.ca-cityapps/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-cityapps)    |
| [Third Party - Active Communities](https://ca.apm.activecommunities.com/saultstemarie/Home)   | `npm run test:thirdparty:activecommunities` | [![ThirdParty-ActiveCommunities](https://github.com/cityssm/lighthouse-scans/workflows/ThirdParty-ActiveCommunities/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ActiveCommunities)          |
| [Third Party - Virtual City Hall](https://myfinance.saultstemarie.ca/vch/)                    | `npm run test:thirdparty:virtualcityhall`   | [![ThirdParty-VCH](https://github.com/cityssm/lighthouse-scans/workflows/ThirdParty-VCH/badge.svg)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-VCH)                                                    |
