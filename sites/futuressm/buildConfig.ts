import { writeConfig } from '../../utils.js'

await writeConfig(
  [
    'https://futuressm.com/',
    'https://futuressm.com/downtownmuralproject/',
    'https://futuressm.com/projects/bike-trail-system/',
    'https://futuressm.com/projects/community-cultural-plan/',
    'https://futuressm.com/projects/wayfinding/',
    'https://futuressm.com/film/',
    'https://futuressm.com/projects/ghg-emissions-inventory/',
    'https://futuressm.com/projects/labour-force-development/',
    'https://futuressm.com/ssm-visual-identity-branding-project/'
  ],
  [
    'https://futuressm.com/index.cfm?fuseaction=content&MenuID=8&PageID=1007',
    'https://futuressm.com/index.cfm?fuseaction=content&menuid=2&pageid=1001'
  ],
  [],
  'futuressm'
)
