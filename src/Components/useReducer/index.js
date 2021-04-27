import React from 'react';
import './styles.scss';

export default function index() {
  return (
    <div className="wrapper">
      <input type="password" name="password" id="password" />
      <button className="eye">
        <span>O</span>
        <span>X</span>
      </button>
      <button className="action">
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </button>
    </div>
  );
}
