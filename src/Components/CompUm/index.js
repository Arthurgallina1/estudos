import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../LoginContext';

export default function Comp1() {
  console.log('rendersz');
  const { actFunc, active } = useContext(LoginContext);
  const func = () => {
    return 22;
  };

  const [state, setState] = useState(func());
  useEffect(() => {
    setState(2);
  }, []);

  actFunc(2);
  return (
    <div>
      {active}
      <h1>comp1</h1>
      {state}
      <Link to="/protected">
        <button type="button">SEND</button>
      </Link>
    </div>
  );
}
