import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import UserLogin from './Components/UserLogin'

class App extends Component {
  render(){
    return (
      <div className="App">
        <UserLogin />
      </div>
    );
  }
}

export default App;
