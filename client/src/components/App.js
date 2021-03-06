import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from  '../actions';


import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h1>Dashboard</h1>;
const NewPatient = () => <h1>NewPatient</h1>;


class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className='container'>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route path='/new/patient' component={NewPatient} />
          </div>
        </BrowserRouter>
      </div>
    ); 
  }
}

export default connect(null, actions)(App);