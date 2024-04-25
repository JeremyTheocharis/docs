module.exports = {
  mySidebar: [
    'introduction',
     'quick-start',
    {
      type: 'category',
      label: 'Installation',
      link: { type: 'doc', id: 'installation/installation',},
      items:[
        'installation/requirements',
        'installation/configuration',
        'installation/private-registry',
        'installation/registry-mirror',
        'installation/airgap',
        'installation/server-roles',
        'installation/packaged-components',
        'installation/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Cluster Datastore',
      link: {type: 'doc', id: 'datastore/datastore',},
      items: [
        'datastore/backup-restore',
        'datastore/ha-embedded',
        'datastore/ha',
        'datastore/cluster-loadbalancer',
      ],
    },
    {
      type: 'category',
      label: 'Upgrades',
      link: {type: 'doc', id: 'upgrades/upgrades',},
      items:[
        'upgrades/killall',
        'upgrades/manual',
        'upgrades/automated',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: {type: 'doc', id: 'security/security'},
      items:[
        'security/secrets-encryption',
        'security/hardening-guide',
        'security/self-assessment-1.8',
        'security/self-assessment-1.23',
      ],
    },
    {
      type: 'category',
      label: 'CLI Tools',
      link: {type: 'doc', id: 'cli/cli'},
      items: [
        'cli/server',
        'cli/agent',
        'cli/certificate',
        'cli/etcd-snapshot',
        'cli/secrets-encrypt',
        'cli/token',
      ],
    },
    'architecture',
    'cluster-access',
    'storage',
    {
      type: 'category',
      label: 'Networking',
      link: { type: 'doc', id: 'networking/networking'},
      items: [
        'networking/basic-network-options',
        'networking/distributed-multicloud',
        'networking/multus-ipams',
        'networking/networking-services',
      ],
    },
    'helm',
    'advanced',
    {
      type: 'category',
      label: 'Reference',
      items: [
        {
          type: 'autogenerated',
          dirName: 'reference',
        },
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        {
          type: 'autogenerated',
          dirName: 'release-notes',
        },
      ],
    },
    'related-projects',
    'known-issues',
    'faq',
  ],
};
