import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo left">Skins</a>
            <ul className='right'>
              <li><a href="sass.html">Sign up</a></li>
              <li><a href="badges.html">Login</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
};

export default Header;