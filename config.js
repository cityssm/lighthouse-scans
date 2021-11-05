export const getSiteURLs_maxDepth = 2;
export const collectConfig_numberOfRuns = 3;
export const collectConfig_urlLimit = 50;
export const assertConfig = {
    assertions: {
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.6 }],
        "categories:seo": ["error", { minScore: 0.5 }],
        "categories:performance": ["error", { minScore: 0.4 }]
    }
};
export const uploadConfig = {
    target: "temporary-public-storage"
};
