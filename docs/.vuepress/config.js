const home_sidebar = [
  {
    title: '🚀 Getting Started',
    collapsable: false,
    children: [
      '/introduction/welcome',
      '/introduction/quick-start',
      '/introduction/test-style'
    ]
  },
  {
    title: '📚 Guides',
    collapsable: false,
    children: [
      '/guides/api-testing',
      '/guides/integration-testing',
      '/guides/e2e-testing',
      '/guides/mock-server',
      '/guides/component-testing',
      '/guides/contract-testing',
      '/guides/data-management',
      '/guides/matching',
      '/guides/reporting',
      '/guides/fuzz-testing'
    ]
  },
  {
    title: '📺 Media',
    collapsable: false,
    children: [
      '/media/blogs',
      '/media/videos',
      '/media/projects'
    ]
  }
];

const api_sidebar = [
  {
    title: 'API',
    collapsable: true,
    children: [
      '/api/api/table-of-contents',
    ]
  },
  {
    title: '🪄 Requests',
    collapsable: true,
    children: [
      '/api/requests/spec',
      '/api/requests/withMethod',
      '/api/requests/withPath',
      '/api/requests/withPathParams',
      '/api/requests/withQueryParams',
      '/api/requests/withHeaders',
      '/api/requests/withCookies',
      '/api/requests/withAuth',
      '/api/requests/withCore',
      '/api/requests/withBody',
      '/api/requests/withJson',
      '/api/requests/withForm',
      '/api/requests/withFile',
      '/api/requests/withMultiPartFormData',
      '/api/requests/withGraphQLQuery',
      '/api/requests/withGraphQLVariables',
      '/api/requests/withRequestTimeout',
      '/api/requests/inspect',
      '/api/requests/retry',
      '/api/requests/returns',
      '/api/requests/stores',
      '/api/requests/save',
      '/api/requests/records',
      '/api/requests/toss',
      '/api/requests/use',
      '/api/requests/name',
      '/api/requests/flow',
      '/api/requests/useLogLevel',
    ]
  },
  {
    title: '🧶 Assertions',
    collapsable: true,
    children: [
      '/api/assertions/expectStatus',
      '/api/assertions/expectHeader',
      '/api/assertions/expectHeaderContains',
      '/api/assertions/expectCookies',
      '/api/assertions/expectCookiesLike',
      '/api/assertions/expectJson',
      '/api/assertions/expectJsonLike',
      '/api/assertions/expectJsonMatch',
      '/api/assertions/expectJsonMatchStrict',
      '/api/assertions/expectJsonSchema',
      '/api/assertions/expectJsonLength',
      '/api/assertions/expectJsonSnapshot',
      '/api/assertions/updateSnapshot',
      '/api/assertions/expectBody',
      '/api/assertions/expectBodyContains',
      '/api/assertions/expectResponseTime',
      '/api/assertions/expectError',
      '/api/assertions/expect'
    ]
  },
  {
    title: '🔩 Utils',
    collapsable: true,
    children: [
      '/api/utils/clone',
      '/api/utils/parse',
      '/api/utils/sleep'
    ]
  },
  {
    title: '🖇️ Matching',
    collapsable: true,
    children: [
      '/api/matching/like',
      '/api/matching/eachLike',
      '/api/matching/any',
      '/api/matching/regex',
      '/api/matching/expression',
      '/api/matching/email',
      '/api/matching/uuid',
      '/api/matching/string',
      '/api/matching/includes',
      '/api/matching/oneOf',
      '/api/matching/int',
      '/api/matching/float',
      '/api/matching/gt',
      '/api/matching/gte',
      '/api/matching/lt',
      '/api/matching/lte',
      '/api/matching/notIncludes',
      '/api/matching/notNull',
      '/api/matching/notEquals',
    ]
  },
  {
    title: '⚒️ Settings',
    collapsable: true,
    children: [
      '/api/settings/setBaseUrl',
      '/api/settings/setDefaultHeaders',
      '/api/settings/setDefaultTimeout',
      '/api/settings/setLogLevel',
      '/api/settings/setLogger',
      '/api/settings/setJsonLikeAdapter',
      '/api/settings/setJsonMatchAdapter',
      '/api/settings/setJsonSchemaAdapter',
      '/api/settings/setFormDataAdapter',
      '/api/settings/setAssertHandlerStrategy',
      '/api/settings/setAssertExpressionStrategy',
      '/api/settings/setCaptureHandlerStrategy',
      '/api/settings/setSnapshotDirectoryPath',
      '/api/settings/setReporterAutoRun',
      '/api/settings/setRequestDefaultRetryCount',
      '/api/settings/setRequestDefaultRetryDelay'
    ]
  },
  {
    title: '🧰 Handlers',
    collapsable: true,
    children: [
      '/api/handlers/addAssertHandler',
      '/api/handlers/addCaptureHandler',
      '/api/handlers/addDataFuncHandler',
      '/api/handlers/addExpectHandler',
      '/api/handlers/addInteractionHandler',
      '/api/handlers/addRetryHandler',
      '/api/handlers/addSpecHandler',
      '/api/handlers/addStateHandler',
      '/api/handlers/addWaitHandler'
    ]
  },
  {
    title: '🎭 Mock',
    collapsable: true,
    children: [
      '/api/mock/start',
      '/api/mock/stop',
      '/api/mock/interaction',
      '/api/mock/addInteraction',
      '/api/mock/useInteraction',
      '/api/mock/clearInteractions',
      '/api/mock/getInteraction',
      '/api/mock/removeInteraction',
      '/api/mock/useRemoteServer',
    ]
  },
  {
    title: '💼 Stash',
    collapsable: true,
    children: [
      '/api/stash/addDataTemplate',
      '/api/stash/getDataTemplate',
      '/api/stash/addDataMap',
      '/api/stash/getDataMap',
      '/api/stash/loadData',
    ]
  },
  {
    title: '🎡 Fuzz',
    collapsable: true,
    children: [
      '/api/fuzz/fuzz',
      '/api/fuzz/onSwagger',
      '/api/fuzz/withBatchSize',
    ]
  },
];

/**
 * @type {import('vuepress/config').Config}
 */
module.exports = {
  title: 'PactumJS',
  description: 'REST API Testing Tool',
  head: [
    ['meta', { name: 'twitter:site', content: '@pactumjs' }],
    ['meta', { property: 'og:title', content: 'PactumJS' }],
    ['meta', { property: 'og:description', content: 'REST API Testing Tool' }],
    ['meta', { property: 'og:image', content: 'https://pactumjs.github.io/social.png' }],
    [
      'script',
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-803PP418EL',
      },
    ],
    [
      'script',
      {},
      [
        "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-803PP418EL');",
      ],
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    lastUpdated: 'Last Updated',

    search: true,
    searchMaxSuggestions: 10,

    nav: [
      { text: '🏠 Home', link: '/introduction/welcome' },
      { text: '⇌ API', link: '/api/api/table-of-contents' },
      { text: '🌟 GitHub', link: 'https://github.com/pactumjs/pactum' }
    ],

    sidebar: {
      '/introduction': home_sidebar,
      '/guides': home_sidebar,
      '/media': home_sidebar,
      '/api': api_sidebar
    },

    docsRepo: 'pactumjs/pactumjs.github.io',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '✏️ Edit this page!',

    smoothScroll: true,
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    '@vuepress/back-to-top',
    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://pactumjs.github.io/'
      }
    ],
    ['vuepress-plugin-code-copy', true]
  ],

}

