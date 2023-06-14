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
          <Form />
        </div>
        <div className='column'>
          <NewForm />
        </div>
       
      </div>
    );
  }
}

export default App;
