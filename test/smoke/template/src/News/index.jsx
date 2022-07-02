import React from 'react';
import { createRoot } from 'react-dom/client';

export default class News extends React.Component {
  render() {
    return <>
      <h1>This is News page</h1>
    </>;
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<News />);