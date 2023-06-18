import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NewForm from './components/Application';

class App extends Component {
  

  handleFormChange = (data) => {
    this.setState({ data })
  }
  render() {
    return (
      <div className="App">
        <div className='column'>
        <h1>form</h1>
          <Form />
        </div>
        <div className='column'>
        <h1>new form</h1>
          <NewForm onChange={this.data}/>
        </div>
       
      </div>
    );
  }
}

export default App;
