import React, { Component } from 'react';

class App extends Component {
  sayHey() {
    alert('hi');
  }
  render() {
    const text = '과연 한글도 되나요';
    return (
      <div>
        <h1>hello sj</h1>
        <h2>welcome to {text}</h2>
        <button onClick={this.sayHey}>Click Me</button>
      </div>
    );
  }
}

export default App;
