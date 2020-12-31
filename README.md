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

## Websites

`npm run test:group:websites`

-   [SaultSteMarie.ca](https://saultstemarie.ca/)
-   [GFLGardens.ca](http://gflgardens.ca/)
-   [WelcomeToSSM.ca](https://welcometossm.com/)

## eServices

`npm run test:group:eservices`

-   [My Sault Ste. Marie eServices](https://apps.saultstemarie.ca/eservices/)
-   [Sault Ste. Marie Building Permit Services](https://apps.saultstemarie.ca/cityapps/index.asp)

## Third Party eServices

`npm run test:group:thirdparty`

-   [Active Communities](https://ca.apm.activecommunities.com/saultstemarie/Home)
-   [Virtual City Hall](https://myfinance.saultstemarie.ca/vch/)
