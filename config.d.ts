export declare const getSiteURLs_maxDepth = 2;
export declare const collectConfig_numberOfRuns = 2;
export declare const collectConfig_urlLimit = 50;
export declare const assertConfig: {
    assertions: {
        'categories:accessibility': (string | {
            minScore: number;
        })[];
        'categories:best-practices': (string | {
            minScore: number;
        })[];
        'categories:seo': (string | {
            minScore: number;
        })[];
        'categories:performance': (string | {
            minScore: number;
        })[];
    };
};
export declare const uploadConfig: {
    target: string;
};
