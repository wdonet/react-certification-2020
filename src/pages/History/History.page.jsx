import React from 'react';

import { useVideo } from '../../state';

function History() {
  const { state } = useVideo();
  const { history } = state;

  return (
    <div>
      <h3>Search History</h3>
      <ul>
        {history.map((item, i) => (
          <li key={`${item}-${i}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
