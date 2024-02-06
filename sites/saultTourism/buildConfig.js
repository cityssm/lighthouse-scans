import { writeConfig } from '../../utils.js';
await writeConfig([
    'https://www.saulttourism.com/',
    'https://www.saulttourism.com/stays',
    'https://www.saulttourism.com/see-do',
    'https://www.saulttourism.com/eat-drink',
    'https://www.saulttourism.com/plan',
    'https://www.saulttourism.com/contact-us'
], ['https://www.saulttourism.com/'], [], 'saultTourism');
