import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {

 handleSubmit(e) {
   e.preventDefault();
   let user = {}
   for (const field in this.refs) {
     user[field] = this.refs[field].value;
   }

    this.props.loginUser(user);
  }

  render() {
    return (
      <div>
        <h1>Component Landing</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <input type='submit' value='submit'/>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Landing)