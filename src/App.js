import React, { Component} from 'react';
import Muffins from './Muffins';

class App extends Component {
  state = {
    muffins : [
      {price: 25, size: 'middle', id: 1},
      {price: 20, size: 'big', id: 2},
      {price: 35, size: 'small', id: 3}
    ]
  }
  render() {
    return (
    <div className="App">
      <h1>My first React app!</h1>
      <p>Welcome :)</p>
      <Muffins muffins = {this.state.muffins}/>
    </div>
  );
}
}

export default App;
