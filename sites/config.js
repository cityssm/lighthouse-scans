"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = exports.assertConfig = void 0;
exports.assertConfig = {
    assertions: {
        "categories:accessibility": ["error", { minScore: 0.98 }],
        "categories:best-practices": ["error", { minScore: 0.6 }],
        "categories:seo": ["error", { minScore: 0.5 }],
        "categories:performance": ["error", { minScore: 0.3 }]
    }
};
exports.uploadConfig = {
    target: "temporary-public-storage"
};
