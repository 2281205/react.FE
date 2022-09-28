import React from 'react';

class App extends React.Component {
  state = {
    isView: true,
    name: true,
    age: true
  }

  handleShow = () => {
    this.setState( (prevState)=>({isView:!prevState.isView}))
  } 

  handleChange = () => {
    this.setState( (prevState)=>({name:!prevState.name}))
    this.setState( (prevState)=>({age:!prevState.age}))
  } 

  render() {
    return (
      <div>
        <button onClick={this.handleShow}>{this.state.isView?`Hide`:`Show`}</button>
        <>{this.state.isView && 
            <div>
              <p>Name:{this.state.name ?` Stepan`:` Mykola`}, age: {this.state.age ?` 25`:` 30`}</p>
              <button onClick={this.handleChange}>Click on me</button>
            </div>
        }</>
      </div>
    );
  }
}

export default App;
