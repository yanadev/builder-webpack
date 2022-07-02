import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.less';
// import logo from '../assets/images/favicon.ico';
import logo from '@images/favicon.ico';
import Demo from '@comp/demo.jsx';
// import '@src/echarts';

export default class Index extends React.Component {

  render() {
    return <>
      <h1>This is Index page</h1>
      <img src={logo} alt="icon" className="logo" />
      55555
      {/* <Demo /> */}


    </>;
  }
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Index />);