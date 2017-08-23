import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/userActions';

class Landing extends Component {

 handleSubmit() {
    const user = {
      username: findDOMNode(this.refs.username).value,
      password: findDOMNode(this.refs.password).value
    }
    this.props.loginUser(user)
  }

  render() {
    return (
      <div>
        <h1>Component Landing</h1>
        <form action='' onSubmit={this.handleSubmit}>
          Username:<br/>
          <input 
            type='text' 
            placeholder='Please ender username'
            ref='username'/>
          <br />
          <input 
            type='password' 
            placeholder='Please ender password'
            ref='password'/>
          <br />
          <br />
          <input type='submit'  value='Submit'/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser });
};

export default connect(null, mapDispatchToProps)(Landing)