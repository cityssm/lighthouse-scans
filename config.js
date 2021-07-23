export const collectConfig_numberOfRuns = 1;
export const assertConfig = {
    assertions: {
        "categories:accessibility": ["error", { minScore: 0.98 }],
        "categories:best-practices": ["error", { minScore: 0.6 }],
        "categories:seo": ["error", { minScore: 0.5 }],
        "categories:performance": ["error", { minScore: 0.3 }]
    }
};
export const uploadConfig = {
    target: "temporary-public-storage"
};
