import React, { useEffect, useContext } from 'react';
import { Link, useHistory, useParams, useLocation } from 'react-router-dom';
import { LoginContext } from '../../LoginContext';

export default function Comp2() {
  const { logged, setLogin, active } = useContext(LoginContext);
  //   let history = useHistory();
  const params = useParams();
  //   const loc = useLocation();
  // useEffect(
  //   () =>
  //     // console.log(params),
  //     console.log(logged),

  //   []
  // );
  return (
    <div>
      <h1>
        comp2
        <br /> {active}
      </h1>
      <button type="button" onClick={setLogin}>
        {logged ? 'LOGOUT' : 'LOGIN'}
      </button>
      <Link to="/">
        <button type="button">back</button>
      </Link>
    </div>
  );
}
