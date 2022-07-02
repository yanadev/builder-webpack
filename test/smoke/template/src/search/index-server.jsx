
'use strict';
const React = require('react');
const logo = require('@images/favicon.ico');
require('./index.less');
// require('../../dist/abx'); /* 测试编译出错 */ 

class Search extends React.Component {
  handleChange(e) {
    console.log(e);
    console.log(this);
  }
  render() {
    return <>ddddd
      <h1>This is Search page</h1>
      <img src={logo} alt="" />
      sssss

    </>;
  }
};

module.exports = <Search />;