export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'style', 'refactor', 'perf', 'test', 'chore', 'ci', 'docs', 'content', 'revert'],
    ],
  },
};
