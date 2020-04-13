import React, { useContext } from 'react';
import useFetch from '../CustomHook';
import { LoginContext } from '../../LoginContext';

export default function Comp4() {
  const { actFunc, active } = useContext(LoginContext);
  const [loading, response] = useFetch(
    'https://jsonplaceholder.typicode.com/todos'
  );
  actFunc(1);

  return (
    <div>
      {loading ? (
        'Carregando'
      ) : (
        <ul style={{ display: 'block' }}>
          {active}
          {response.map((post) => (
            <li style={{ display: 'inline-block' }}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
