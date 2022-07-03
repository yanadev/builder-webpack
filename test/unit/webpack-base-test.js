const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  // console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '/home/runner/work/builder-webpack/builder-webpack/test/smoke/template/src/index/index.jsx');
    assert.equal(baseConfig.entry.search, '/home/runner/work/builder-webpack/builder-webpack/test/smoke/template/src/search/index.jsx');
  });
});