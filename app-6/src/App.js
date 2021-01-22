import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
    constructor(){
      super()

      this.state={
        list: [],
        input: '',
      }
      this.addTaskHandler = this.addTaskHandler.bind(this)
    }

    inputChanger(value){
      this.setState({input:value})
    }

    addTaskHandler(value){
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
      })
    }

    render(){
        let list = this.state.list.map((element, index) => {
          return <Todo key ={index} task = {element} />
        })


      return(
        <div className='App'>
          <h1>Important Stuff:</h1>

          <div>
          <input 
            value={this.state.input}
            placeholder='Enter New Task Here'
            onChange={(e)=> this.inputChanger(e.target.value)}
            />
            <button onClick={this.addTaskHandler}>Add to List</button>
        </div>

        <br />
        {list}
    </div>
      )
    }
}

export default App

