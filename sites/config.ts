export const assertConfig = {
  assertions: {
    "categories:accessibility": ["error", { minScore: 0.95 }],
    "categories:best-practices": ["warn", { minScore: 0.8 }],
    "categories:performance": ["warn", { minScore: 0.8 }]
  }
};

export const uploadConfig = {
  target: "temporary-public-storage"
};
