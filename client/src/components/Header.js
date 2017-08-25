import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

  renderContent() {
    switch(this.props.auth) {
      case null: 
        return <li>>...loading</li>
      case false: 
        return <li><a href="">Login</a></li>
      default: 
       return <li>Hello {this.props.auth.username}</li>
    }
  }
 

  render() {
    console.log('^^^', this.props.auth)
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo left">Skins</a>
            <ul className='right'>
              <li><a href="">Sign up</a></li>
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);