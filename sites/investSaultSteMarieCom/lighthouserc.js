"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
module.exports = {
    ci: {
        collect: {
            url: [
                "https://investsaultstemarie.com/",
                "https://investsaultstemarie.com/key-sectors/",
                "https://investsaultstemarie.com/why-sault-ste.-marie/advantages/",
                "https://investsaultstemarie.com/why-sault-ste.-marie/success-stories/",
                "https://investsaultstemarie.com/about/publications/",
                "https://investsaultstemarie.com/locate-expand/available-land-buildings/",
                "https://investsaultstemarie.com/about/contact-us/",
                "https://investsaultstemarie.com/about/photo-gallery/",
                "https://investsaultstemarie.com/gallery/?ParentID=7",
                "https://investsaultstemarie.com/about/video-gallery/",
                "https://investsaultstemarie.com/about/news-events/",
                "https://investsaultstemarie.com/about/news-events/ViewOneBooking/?id=14"
            ],
            numberOfRuns: 2
        },
        assert: config_1.assertConfig,
        upload: config_1.uploadConfig
    }
};
