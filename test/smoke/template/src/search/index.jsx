import React from 'react';
import { createRoot } from 'react-dom/client';

export default class Search extends React.Component {
  render() {
    return <>
      <h1>This is Search page</h1>
    </>;
  }
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Search />);