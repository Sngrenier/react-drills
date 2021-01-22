import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
      super()

     this.state = {
       filterString: '',
       shoes: ['over knee boots', 'stilletos', 'sandals', 'loafers', 'slides', 'mules'],
     } 
    }
    

    shoesHandler = (filter) => {
      this.setState({filterString: filter})
    }


render() {
    let shoesToDisplay = this.state.shoes
    .filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })


  return(
    <div className='App'>
      <input onChange={(event) => {this.shoesHandler(event.target.value)}} />
      {shoesToDisplay}
    </div>
  )
}

}

export default App;
