import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginContext } from '../../LoginContext';

export default function Comp1() {
  const { actFunc, active } = useContext(LoginContext);
  actFunc(2);
  return (
    <div>
      {active}
      <h1>comp1</h1>
      <Link to="/protected">
        <button type="button">SEND</button>
      </Link>
    </div>
  );
}
