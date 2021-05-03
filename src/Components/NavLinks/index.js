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
    <nav className="navbar">
      <ul className="ul-list">
        <NavLink to="/" activeStyle={style} exact>
          <li className="link-item">Comp1</li>
        </NavLink>
        <NavLink to="/c2/c2" activeStyle={style}>
          <li className="link-item">Comp2</li>
        </NavLink>
        <NavLink to="/protected" activeStyle={style}>
          <li className="link-item">Comp3</li>
        </NavLink>
        <NavLink to="/c3" activeStyle={style}>
          <li className="link-item">Comp4</li>
        </NavLink>
        <NavLink to="/c5" activeStyle={style}>
          <li className="link-item">Comp5</li>
        </NavLink>
        <NavLink to="/c6" activeStyle={style}>
          <li className="link-item">Comp6 - Error Boundaries</li>
        </NavLink>
        <NavLink to="/fref" activeStyle={style}>
          <li className="link-item">Forward Ref</li>
        </NavLink>
        <NavLink to="/reducer" activeStyle={style}>
          <li className="link-item">Reducer</li>
        </NavLink>
        <NavLink to="/context" activeStyle={style}>
          <li className="link-item">Context Render</li>
        </NavLink>
        <NavLink to="/dnd" activeStyle={style}>
          <li className="link-item">Drag and Drop</li>
        </NavLink>
      </ul>
    </nav>
  );
}
