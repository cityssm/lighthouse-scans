"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = exports.assertConfig = void 0;
exports.assertConfig = {
    preset: "lighthouse:no-pwa",
    assertions: {
        "uses-webp-images": "off"
    }
};
exports.uploadConfig = {
    target: "temporary-public-storage"
};
