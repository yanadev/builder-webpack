'use strict';
const React = require('react');
require('./index.less');
const logo = require('@images/favicon.ico');

class Index extends React.Component {
  render() {
    return <>
      5555555
      <h1>This is Index page</h1>
      {/* <img src={logo} alt="icon" className="logo" />
      55555 */}
    </>;
  }
};
module.exports = <Index />;