import React from 'react';

class App extends React.Component {
  state = {
    isView: false,
    name: 'Stepan', 
    age: 25};

  handleShow = () => {
    this.setState( (prevState)=>({isView:!prevState.isView}))
  } 

  handleChange = () => {
    this.state.name === `Mykola`
    ? this.setState( (prevState)=>({isView:!prevState.isView, name: 'Stepan', age: 25}))
    : this.setState( {name:`Mykola`,age: 30})
  } 

  render() {
    return (
      <div>
       <>
          {!this.state.isView &&<button onClick={this.handleShow}>{!this.state.isView && `Show`}</button>}
       </>
        <>
          {this.state.isView && 
            <div>
              <p>Name: {this.state.name}, age: {this.state.age}</p>
              <button onClick={this.handleChange}>{this.state.name === `Stepan`? 'Click on me' : 'HIDE'}</button>
            </div>
          }
        </>
      </div>
    );
  }
}

export default App;
