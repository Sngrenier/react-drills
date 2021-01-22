import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(){
      super()

      this.state = {
        shoes: ['over knee boots', 'stilletos', 'sandals', 'loafers', 'slides', 'mules']
      }
    }

    render() {
      let shoesToDisplay = this.state.shoes.map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })
      return <div className="App">{shoesToDisplay}</div>
    }
}

export default App;
