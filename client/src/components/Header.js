import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {


  renderContent() {
    if (this.props.auth.username) {
      console.log('***', this.props.auth)
      return (
        <div>
          <li onClick={()=> this.props.logoutUser()}><a>Sign Out</a></li>
          <li><a href="">Welcome Back {this.props.auth.username}</a></li>
        </div>
      )
    }
    else {
      return <li><a>Sign In</a></li>
    }
  }
 
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="" className="brand-logo left">Skins</a>
            <ul className='right'>
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

export default connect(mapStateToProps, actions)(Header);