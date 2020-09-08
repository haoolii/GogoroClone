import React, { Component } from 'react';
import { Router, Link } from '@reach/router';

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'active' : '',
      };
    }}
  />
);

export default class Tab extends Component {
  render() {
    return (
      <ul className="tab">
        <li className="tab__item">
          <NavLink to="/power">動力</NavLink>
        </li>
        <li className="tab__item">
          <NavLink to="/performance">性能</NavLink>
        </li>
        <li className="tab__item">
          <NavLink to="/temperature">溫度</NavLink>
        </li>
        <li className="tab__item">
          <NavLink to="/operation">操控</NavLink>
        </li>
      </ul>
    );
  }
}
