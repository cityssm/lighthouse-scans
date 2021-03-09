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

## Current Test Criteria

| Test Category  | Minimum Score | Result  |
| -------------- | ------------- | ------- |
| Accessibility  | 98%           | Error   |
| Best Practices | 70%           | Error   |
| Performance    | 50%           | Warning |

Categories with "Error" results affect the passing score below.
Categories with "Warning" results are logged.

As we improve our websites, the success criteria will increase.

## Latest Scan Results

Note that websites marked as "failing" are not down.  We are just striving to improve them.

Thanks [Shields.io](https://shields.io/) for the badges used to make the table below.

| Website                                                                                                                                                                   | Test                                        | Latest Results                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SaultSteMarie.ca](https://saultstemarie.ca/)                                                                                                                             | `npm run test:website:saultstemarie`        | [![SaultSteMarie.ca](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/SaultSteMarie.ca?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultSteMarie.ca)                                              |
| [GFLGardens.ca](http://gflgardens.ca/)                                                                                                                                    | `npm run test:website:gflgardens`           | [![GFLGardens.ca](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/GFLGardens.ca?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AGFLGardens.ca)                                                       |
| [WelcomeToSSM.com](https://welcometossm.com/)                                                                                                                             | `npm run test:website:welcometossm`         | [![WelcomeToSSM.com](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/WelcomeToSSM.com?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AWelcomeToSSM.com)                                              |
| [InvestSaultSteMarie.com](https://investsaultstemarie.com/)                                                                                                               | `npm run test:website:investsaultstemarie`  | [![InvestSaultSteMarie.com](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/InvestSaultSteMarie.com?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AInvestSaultSteMarie.com)                         |
| [SaultTourism.com](https://saulttourism.com/)                                                                                                                             | `npm run test:website:saulttourism`         | [![SaultTourism.com](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/SaultTourism.com?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultTourism.com)                                              |
| [My Sault Ste. Marie eServices](https://apps.saultstemarie.ca/eservices/)                                                                                                 | `npm run test:eservices:apps-eservices`     | [![apps.saultstemarie.ca-eservices](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/apps.saultstemarie.ca-eservices?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-eservices) |
| [Sault Ste. Marie Building Permit Services](https://apps.saultstemarie.ca/cityapps/index.asp)                                                                             | `npm run test:eservices:apps-cityapps`      | [![apps.saultstemarie.ca-cityapps](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/apps.saultstemarie.ca-cityapps?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-cityapps)    |
| [Document Requesting Service](https://apps.saultstemarie.ca/cityapps/shop)                                                                                                | `npm run test:eservices:apps-shop`          | [![apps.saultstemarie.ca-shop](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/apps.saultstemarie.ca-shop?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-shop)                |
| [Third Party - Active Communities](https://ca.apm.activecommunities.com/saultstemarie/Home)                                                                               | `npm run test:thirdparty:activecommunities` | [![ThirdParty-ActiveCommunities](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/ThirdParty-ActiveCommunities?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ActiveCommunities)          |
| [Third Party - Arena Ticket Sales](https://gflgardens.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=SC&linkID=global-steelback&shopperContext=&caller=&appCode=) | `npm run test:thirdparty:arenaTicketSales`  | [![ThirdParty-ArenaTicketSales](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/ThirdParty-ArenaTicketSales?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ArenaTicketSales)             |
| Third Party - Clear Risk Forms                                                                                                                                            | `npm run test:thirdparty:clearrisk`         | [![ThirdParty-ClearRisk](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/ThirdParty-ClearRisk?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ClearRisk)                                  |
| [Third Party - Virtual City Hall](https://myfinance.saultstemarie.ca/vch/)                                                                                                | `npm run test:thirdparty:virtualcityhall`   | [![ThirdParty-VCH](https://img.shields.io/github/workflow/status/cityssm/lighthouse-scans/ThirdParty-VCH?label=%20&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-VCH)                                                    |
