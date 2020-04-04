import React from 'react';
import useFetch from '../CustomHook';

export default function Comp4() {
  const [loading, response] = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );

  return (
    <div>
      {loading ? (
        'Carregando'
      ) : (
        <ul style={{ display: 'block' }}>
          {response.map((post) => (
            <li style={{ display: 'inline-block' }}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
