export const assertConfig = {
  assertions: {
    "categories:accessibility": ["error", { minScore: 0.98 }],
    "categories:best-practices": ["error", { minScore: 0.7 }],
    "categories:performance": ["warn", { minScore: 0.5 }]
  }
};

export const uploadConfig = {
  target: "temporary-public-storage"
};
