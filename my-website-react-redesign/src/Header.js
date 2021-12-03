import React from 'react';
import data from './info.json';

function Header () {
  let { name, title } = data;
  return(
    <div className="header">
      <header>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </header>
    </div>
    );
};

export default Header;
