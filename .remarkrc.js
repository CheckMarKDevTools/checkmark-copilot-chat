export default {
  settings: {
    emphasis: '_',
    bullet: '-',
    listItemIndent: 'one',
    rule: '-',
    tablePipeAlign: false,
    maximumLineLength: false,
    firstHeadingLevel: 1,
  },
  plugins: [
    ['remark-lint', { settings: { tablePipeAlign: false } }],
    ['remark-lint-no-unneeded-full-reference-link', false],
    ['remark-frontmatter', { type: 'yaml', marker: '-' }],
    ['remark-github', { repository: 'anchildress1/awesome-github-copilot' }],
    ['remark-gfm', { tablePipeAlign: false }],
  ],
};
