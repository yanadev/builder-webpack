const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');
  // console.log(baseConfig);
  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf('builder-webpack/test/smoke/template/src/index/index.jsx') > -1, true);
    assert.equal(baseConfig.entry.search.indexOf('builder-webpack/test/smoke/template/src/search/index.jsx') > -1, true);
  });
});