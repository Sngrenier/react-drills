import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import Image from "./Image"

class App extends Component {
  render(){
    return (
      <div className="App">
        <Image url={"https://stylecaster.com/wp-content/uploads/2017/04/pink-pumps-yellow-purse-jeans1.jpg"}/>
      </div>
    );
  }
}

export default App;