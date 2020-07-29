/* globals describe, it */

const { expect } = require('chai');
const extractPhrases = require('../../src/api/extract');

describe('extractPhrases', () => {
  it('works with webpack', async () => {
    expect(await extractPhrases('test/fixtures/webpack.js', 'webpack.js'))
      .to.deep.equal({
        '6f48100ca5a57d2db9b685a8373be8a6': {
          string: 'Text 1',
          meta: {
            character_limit: 10,
            context: ['foo'],
            tags: ['tag1', 'tag2'],
            developer_comment: 'comment',
            occurrences: ['webpack.js'],
          },
        },
        '5d47152bcd597dd6adbff4884374aaad': {
          string: 'Text 2',
          meta: { context: [], tags: [], occurrences: ['webpack.js'] },
        },
        '3cd62915590816fdbf53852e44ee675a': {
          string: 'Text 3',
          meta: { context: [], tags: [], occurrences: ['webpack.js'] },
        },
        '33f5afa925f1464280d72d6d9086057c': {
          string: 'Text 4',
          meta: { context: [], tags: [], occurrences: ['webpack.js'] },
        },
      });
  });

  it('works with global tags', async () => {
    expect(await extractPhrases('test/fixtures/webpack.js', 'webpack.js', ['g1', 'g2']))
      .to.deep.equal({
        '6f48100ca5a57d2db9b685a8373be8a6': {
          string: 'Text 1',
          meta: {
            character_limit: 10,
            context: ['foo'],
            tags: ['tag1', 'tag2', 'g1', 'g2'],
            developer_comment: 'comment',
            occurrences: ['webpack.js'],
          },
        },
        '5d47152bcd597dd6adbff4884374aaad': {
          string: 'Text 2',
          meta: { context: [], tags: ['g1', 'g2'], occurrences: ['webpack.js'] },
        },
        '3cd62915590816fdbf53852e44ee675a': {
          string: 'Text 3',
          meta: { context: [], tags: ['g1', 'g2'], occurrences: ['webpack.js'] },
        },
        '33f5afa925f1464280d72d6d9086057c': {
          string: 'Text 4',
          meta: { context: [], tags: ['g1', 'g2'], occurrences: ['webpack.js'] },
        },
      });
  });

  it('works with node', async () => {
    expect(await extractPhrases('test/fixtures/node.js', 'node.js'))
      .to.deep.equal({
        '6f48100ca5a57d2db9b685a8373be8a6': {
          string: 'Text 1',
          meta: {
            character_limit: 10,
            context: ['foo'],
            tags: ['tag1', 'tag2'],
            developer_comment: 'comment',
            occurrences: ['node.js'],
          },
        },
        '5d47152bcd597dd6adbff4884374aaad': {
          string: 'Text 2',
          meta: { context: [], tags: [], occurrences: ['node.js'] },
        },
        '3cd62915590816fdbf53852e44ee675a': {
          string: 'Text 3',
          meta: { context: [], tags: [], occurrences: ['node.js'] },
        },
        '33f5afa925f1464280d72d6d9086057c': {
          string: 'Text 4',
          meta: { context: [], tags: [], occurrences: ['node.js'] },
        },
      });
  });

  it('works with jsx', async () => {
    expect(await extractPhrases('test/fixtures/react.jsx', 'react.jsx'))
      .to.deep.equal({
        '6f48100ca5a57d2db9b685a8373be8a6': {
          string: 'Text 1',
          meta: {
            character_limit: 10,
            context: ['foo'],
            tags: ['tag1', 'tag2'],
            developer_comment: 'comment',
            occurrences: ['react.jsx'],
          },
        },
        '5d47152bcd597dd6adbff4884374aaad': {
          string: 'Text 2',
          meta: { context: [], tags: [], occurrences: ['react.jsx'] },
        },
        '3cd62915590816fdbf53852e44ee675a': {
          string: 'Text 3',
          meta: { context: [], tags: [], occurrences: ['react.jsx'] },
        },
        '33f5afa925f1464280d72d6d9086057c': {
          string: 'Text 4',
          meta: { context: [], tags: [], occurrences: ['react.jsx'] },
        },
      });
  });
});