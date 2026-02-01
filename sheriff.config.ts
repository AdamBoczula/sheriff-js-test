import {sameTag, SheriffConfig} from '@softarc/sheriff-core';

/**
  * Minimal configuration for Sheriff
  * Assigns the 'noTag' tag to all modules and
  * allows all modules to depend on each other.
  */

export const config: SheriffConfig = {
  entryFile: 'src/main.ts',
  enableBarrelLess: true,
  modules: {
    // Root level
    'src/app': {
      auth: {
        'feature/login': ['domain:auth-login', 'type:feature'],
        'feature/create-account': ['domain:auth-create-account', 'type:feature'],
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
