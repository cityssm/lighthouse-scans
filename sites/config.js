"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = exports.assertConfig = void 0;
exports.assertConfig = {
    preset: "lighthouse:no-pwa",
    assertions: {
        "external-anchors-use-rel-noopener": "warn",
        "meta-description": "warn",
        "no-unload-listeners": "warn",
        "unsized-images": "warn",
        "unused-css-rules": "warn",
        "unused-javascript": "warn",
        "uses-optimized-images": "warn",
        "uses-text-compression": "warn",
        "uses-webp-images": "off"
    }
};
exports.uploadConfig = {
    target: "temporary-public-storage"
};
