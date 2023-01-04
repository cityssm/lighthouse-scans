# City of Sault Ste. Marie Lighthouse Scans

A script to scan the City's websites for performance, accessibility, and best practice issues.

Uses [lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
to regularly audit websites that the City of Sault Ste. Marie is responsible for.

## Run It Locally

```bash
npm install
npm install -g @lhci/cli npm-run-all
npm test
```

Individual website tests and website groups can be run as well.
See the `scripts` section of the [package.json](package.json) file.

## Current Test Criteria

| Test Category                    | Minimum Score |
| -------------------------------- | ------------- |
| Accessibility                    | 95%           |
| Best Practices                   | 60%           |
| Search Engine Optimization (SEO) | 50%           |
| Performance                      | 40%           |

As we improve our websites, the success criteria will increase.

## Latest Scan Results

Note that websites marked as "failing" are not down. We are just striving to improve them.

Thanks [Shields.io](https://shields.io/) for the badges used to make the table below.

| Website /Test                                                                                                                                                                                                             | Latest Results                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SaultSteMarie.ca](https://saultstemarie.ca/)<br />`npm run test:website:saultstemarie`                                                                                                                                   | [![SaultSteMarie.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/saultstemarieCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultSteMarie.ca)                               |
| [GFLGardens.ca](http://gflgardens.ca/)<br />`npm run test:website:gflgardens`                                                                                                                                             | [![GFLGardens.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/gflgardensCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AGFLGardens.ca)                                        |
| [ArtsAndCultureSSM.ca](https://artsandculturessm.ca/)<br />`npm run test:website:artsandculturessm`                                                                                                                       | [![ArtsAndCultureSSM.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/artsandculturessmCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AArtsAndCultureSSM.ca)                      |
| [WelcomeToSSM.com](https://welcometossm.com/)<br />`npm run test:website:welcometossm`                                                                                                                                    | [![WelcomeToSSM.com](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/welcometossmCOM-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AWelcomeToSSM.com)                               |
| [FutureSSM.com](https://futuressm.com/)<br />`npm run test:website:futuressm`                                                                                                                                             | [![FutureSSM.com](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/futuressmCOM-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AFutureSSM.com)                                        |
| [SaultTourism.com](https://saulttourism.com/)<br />`npm run test:website:saulttourism`                                                                                                                                    | [![SaultTourism.com](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/saulttourismCOM-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultTourism.com)                               |
| [Sault Ste. Marie Building Permit Services](https://apps.saultstemarie.ca/cityapps/index.asp)<br />`npm run test:eservices:apps-cityapps`                                                                                 | [![apps.saultstemarie.ca-cityapps](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/apps-cityapps-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-cityapps)     |
| [Document Requesting Service](https://apps.saultstemarie.ca/cityapps/shop)<br />`npm run test:eservices:apps-shop`                                                                                                        | [![apps.saultstemarie.ca-shop](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/apps-shop-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Aapps.saultstemarie.ca-shop)                 |
| [Third Party - Active Communities](https://ca.apm.activecommunities.com/saultstemarie/Home)<br />`npm run test:thirdparty:activecommunities`                                                                              | [![ThirdParty-ActiveCommunities](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/3rd-activecommunities-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ActiveCommunities) |
| [Third Party - Arena Ticket Sales](https://gflgardens.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=SC&linkID=global-steelback&shopperContext=&caller=&appCode=)<br />`npm run test:thirdparty:arenaTicketSales` | [![ThirdParty-ArenaTicketSales](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/3rd-arenaTicketSales-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ArenaTicketSales)    |
| Third Party - Clear Risk Forms<br />`npm run test:thirdparty:clearrisk`                                                                                                                                                   | [![ThirdParty-ClearRisk](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/3rd-clearrisk-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-ClearRisk)                         |
| [Third Party - Virtual City Hall](https://myfinance.saultstemarie.ca/vch/)<br />`npm run test:thirdparty:virtualcityhall`                                                                                                 | [![ThirdParty-VCH](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/3rd-virtualcityhall-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AThirdParty-VCH)                               |
| [cityssm.github.io](https://cityssm.github.io/)<br />`npm run test:other:cityssmGithub`                                                                                                                                   | [![cityssm.github.io](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/cityssmGithubIO-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3Acityssm.github.io)                             |
| [CWASSM.ca](https://cwassm.ca/)<br />`npm run test:other:cwassm`                                                                                                                                                          | [![CWASSM.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/cwassmCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ACWASSM.ca)                                                    |
| [SaultNetwork.ca](https://saultnetwork.ca/)<br />`npm run test:other:saultnetwork`                                                                                                                                        | [![SaultNetwork.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/saultnetworkCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultNetwork.ca)                                  |
| [SaultTogether.ca](https://www.saulttogether.ca/)<br />`npm run test:other:saulttogether`                                                                                                                                 | [![SaultTogether.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/saulttogetherCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3ASaultTogether.ca)                               |
| [ShapeTheSault.ca](https://shapethesault.ca/)<br />`npm run test:other:shapethesault`                                                                                                                                     | [![ShapeTheSault.ca](https://img.shields.io/github/actions/workflow/status/cityssm/lighthouse-scans/shapethesaultCA-ci.yml?label=lighthouse&style=for-the-badge)](https://github.com/cityssm/lighthouse-scans/actions?query=workflow%3AShapeTheSault.ca)                               |

## Links

- [City of Sault Ste. Marie Website Auditing Resources](https://cityssm.github.io/website-auditing/)
- [SaultSteMarie.ca Upptime](https://cityssm.github.io/upptime/)
