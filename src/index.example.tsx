import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  step: number;
}

interface AppState {
  counter: number;
}

const App = (props: AppProps): JSX.Element => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + props.step);
  };

  const onDecrement = () => {
    setCounter(counter - props.step);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={onIncrement}> Increment {props.step}</button>
      <button onClick={onDecrement}> Decrement {props.step}</button>
    </div>
  );
};

// Class component example
// class App extends React.Component<AppProps, AppState> {
//   state = {
//     counter: 0,
//   };

//   onIncrement = (): void => {
//     this.setState((prevState, props) => {
//       return { counter: prevState.counter + props.step };
//     });
//   };

//   onDecrement = (): void => {
//     this.setState((prevState, props) => {
//       return { counter: prevState.counter - props.step };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>Counter: {this.state.counter}</p>
//         <button onClick={this.onIncrement}> Increment {this.props.step}</button>
//         <button onClick={this.onDecrement}> Decrement {this.props.step}</button>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <App step={2} />
  </React.StrictMode>,
  document.getElementById('root')
);
