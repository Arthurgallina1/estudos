import React, { useContext } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../LoginContext';

export default function NavLinks() {
  const context = useContext(LoginContext);
  const style = {
    borderBottom: '2px solid white',
    color: 'red',
  };
  return (
    <nav>
      <ul>
        <NavLink to="/" activeStyle={style} exact>
          <li>Comp1</li>
        </NavLink>
        <NavLink to="/c2/c2" activeStyle={style}>
          <li>Comp2</li>
        </NavLink>
        <NavLink to="/protected" activeStyle={style}>
          <li>Comp3</li>
        </NavLink>
        <NavLink to="/c3" activeStyle={style}>
          <li>Comp4</li>
        </NavLink>
        <NavLink to="/c5" activeStyle={style}>
          <li>Comp5</li>
        </NavLink>
      </ul>
    </nav>
  );
}
