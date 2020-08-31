import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addUserData } from './redux/actions';

const App = ({ user, addUserData }) => {
  return (
    <div className="App">
      <h1>React Redux</h1>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {user} = state.User;    
  return {user};
};

export default connect(mapStateToProps, { addUserData })(App);
