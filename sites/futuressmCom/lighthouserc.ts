import { assertConfig, uploadConfig } from "../config";

module.exports = {
  ci: {
    collect: {
      url: [
        // Home page
        "https://futuressm.com/",

        "https://futuressm.com/about/",
        "https://futuressm.com/about/background/",
        "https://futuressm.com/about/reality-check/",
        "https://futuressm.com/about/faq/",
        "https://futuressm.com/about/our-team/",

        "https://futuressm.com/action-teams/",
        "https://futuressm.com/action-teams/bawaating-advisory-circle/",
        "https://futuressm.com/action-teams/arts-and-culture/",
        "https://futuressm.com/action-teams/downtown-development/",
        "https://futuressm.com/action-teams/economic-growth-and-diversity/",
        "https://futuressm.com/action-teams/education/",
        "https://futuressm.com/action-teams/energy-and-the-environment/",
        "https://futuressm.com/action-teams/health/",
        "https://futuressm.com/action-teams/social-equity/",

        "https://futuressm.com/projects/",
        "https://futuressm.com/projects/bike-trail-network/",
        "https://futuressm.com/projects/community-art-project/",
        "https://futuressm.com/projects/community-art-project/downtown-mural-project/",
        "https://futuressm.com/projects/community-art-project/public-pianos/",
        "https://futuressm.com/projects/community-cultural-plan/",
        "https://futuressm.com/projects/downtown-wayfinding/",
        "https://futuressm.com/projects/film-television-digital-media/",
        "https://futuressm.com/projects/labour-force-development/",
        "https://futuressm.com/projects/ssm-visual-identity-branding/",
        "https://futuressm.com/projects/ssm-visual-identity-branding/ssm-branding-faqs/",
        "https://futuressm.com/projects/ghg-emissions-inventory/",

        "https://futuressm.com/news-reporting/",
        "https://futuressm.com/sault-network/",
        "https://futuressm.com/contact/"
      ],
      numberOfRuns: 2
    },
    assert: assertConfig,
    upload: uploadConfig
  }
};
