import {sameTag, SheriffConfig} from '@softarc/sheriff-core';
//
//

export const config: SheriffConfig = {
  entryFile: 'src/main.ts',
  enableBarrelLess: true,
  // old by me
  modules: {
    // Root level
    'src/app': {
      auth: {
        // 'feature/login': ['domain:auth-login', 'type:feature'],
        // 'feature/create-account': ['domain:auth-create-account', 'type:feature'],
        // shortcut for above
        'feature/<type>': ['domain:auth-<type>', 'type:feature'],
        '<type>': ['domain:auth', 'type:<type>']
      },
      shared: {
        '<type>': ['domain:shared', 'type:<type>']
      }
    }
  },
  depRules: {
    root: ['type:feature'],
    'domain:auth': ['domain:shared'],
    'domain:auth-login': ['domain:shared', 'type:ui'],
    'domain:auth-create-account': ['domain:shared', 'type:ui'],
    'domain:shared': [sameTag],
    'type:data': ['type:data', 'type:model'],
    'type:feature': ['type:data', 'type:model', 'domain:shared', 'type:ui'],
  },
};
