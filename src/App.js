import React, { Component} from 'react';
import Muffins from './Muffins';
import AddMuffin from './AddMuffin';

class App extends Component {
  state = {
    muffins : [
      {name: 'saffran', price: 25, size: 'middle', id: 1},
      {name: 'vanilj', price: 20, size: 'big', id: 2},
      {name: 'banana', price: 35, size: 'small', id: 3},
      {name: 'apple', price: 30, size: 'middle', id: 3}
    ]
  }
  addMuffin =(muffin)=> {
    muffin.id=Math.random();
    let muffins = [...this.state.muffins, muffin];
    this.setState({
      muffins:muffins
    })
  }
  render() {
    return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Muffins muffins = {this.state.muffins}/>
      <AddMuffin addMuffin={this.addMuffin}/>
    </div>
  );
}
}

export default App;
