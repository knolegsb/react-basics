import React, {useState} from 'react';
//import logo from './logo.svg';
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

// class App extends React.Component {
  // state = {
  //   counter: 0
  // }

  // increment = (num) => {
  //   this.setState({
  //     counter: this.state.counter + num
  //   });
  // }



  // render() {

  const App = () => {

    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState("My Counter Application")
    // const counterArr = useState(0);

    const increment = num => () => {
      setCounter(counter + num)
      // counterArr[1](counterArr[0] + num);
    }

    return (
      <div className="container">
        <h1>{title}: {counter}</h1>
        {/* <h1>Counter Application: {counterArr[0]}</h1> */}
        <button className="btn btn-primary" onClick={increment(1)}>Increment</button>
        <button className="btn btn-warning" onClick={increment(-1)}>Decrement</button>
      </div>
    )
  }

//}

export default App;
