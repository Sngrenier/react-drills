import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import NewTask from './NewTask'
import List from './List'

class App extends Component{
  constructor(){
    super()

    this.state={
      list: []
    }
    this.addTaskHandler = this.addTaskHandler.bind(this)
  }
  addTaskHandler(task) {
    this.setState({ list: [...this.state.list, task]})
  }

  render(){
    return(
      <div className = "App">
        <h1>My Important Tasks:</h1>
        <NewTask add={this.addTaskHandler}/>
        <List add={this.state.list}/>
      </div>

    )
  }

}
export default App