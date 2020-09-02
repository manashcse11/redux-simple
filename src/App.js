import React, { useState } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addUserData } from './redux/actions';

const App = ({ user, addUserData }) => {
  const [name, setName] = useState(user != null ? (user.hasOwnProperty('name') ? user.name : '') : '');
  const [profession, setProfession] = useState(user != null ? (user.hasOwnProperty('profession') ? user.profession : '') : '');

  const handleChange = (event) => {
    if(event.target.name == "name"){
      setName(event.target.value);
    }
    if(event.target.name == "profession"){
      setProfession(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    addUserData({name, profession});
  };

  return (
    <div className="App">
      <h1>React Redux Example</h1>
      Name: <input type="text" name="name" value={name} onChange={handleChange} /><br/>
      Profession: <input type="text" name="profession" value={profession} onChange={handleChange} /><br/>
      <button type="submit" onClick={handleSubmit}>Update</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {user} = state.User;    
  return {user};
};

export default connect(mapStateToProps, { addUserData })(App);
