"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadConfig = exports.assertConfig = void 0;
exports.assertConfig = {
    assertions: {
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:performance": ["warn", { minScore: 0.8 }]
    }
};
exports.uploadConfig = {
    target: "temporary-public-storage"
};
