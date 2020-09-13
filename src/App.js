import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello World</h1>
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  state = {
    counter: 0
  }

  increment = (num) => {
    this.setState({
      counter: this.state.counter + num
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Counter Application: {this.state.counter}</h1>
        <button className="btn btn-primary" onClick={() => this.increment(1)}>Increment</button>
        <button className="btn btn-warning" onClick={() => this.increment(-1)}>Decrement</button>
      </div>
    )
  }

}

export default App;
