import React from 'react';
export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLazyLoad = this.handleLazyLoad.bind(this);
    this.testLodash = this.testLodash.bind(this);
  }
  handleLazyLoad() {
    return import('lodash').then(({ default: _ }) => {
      return <h1>hello, webpack</h1>;
    });
  }

  testLodash() {
    this.handleLazyLoad().then(ele => {
      this.setState({
        newNode: ele
      });

    });
  }
  render() {
    return <>
      <button onClick={this.testLodash}>Lazy Load</button>
      {this.state.newNode}
    </>;
  }
}