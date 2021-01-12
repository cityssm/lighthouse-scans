import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://investsaultstemarie.com/",

        // Pages
        "https://investsaultstemarie.com/key-sectors/",
        "https://investsaultstemarie.com/why-sault-ste.-marie/advantages/",
        "https://investsaultstemarie.com/why-sault-ste.-marie/success-stories/",
        "https://investsaultstemarie.com/about/publications/",

        // Interactive Pages
        "https://investsaultstemarie.com/locate-expand/available-land-buildings/",
        "https://investsaultstemarie.com/about/contact-us/",

        // Photo Galleries
        "https://investsaultstemarie.com/about/photo-gallery/",
        "https://investsaultstemarie.com/gallery/?ParentID=7",
        "https://investsaultstemarie.com/about/video-gallery/",

        // News
        "https://investsaultstemarie.com/about/news-events/",
        "https://investsaultstemarie.com/about/news-events/ViewOneBooking/?id=14"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
