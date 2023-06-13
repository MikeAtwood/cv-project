import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Application from './components/Application';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      }
    }
  }

  handleFormChange = (data) => {
    this.setState({ data })
  }
  render() {
    return (
      <div className="App">
        <h1 className='title'>CV Application</h1>
        <Form onChange={this.handleFormChange}/>
        <Application data={this.state.data}/>

      </div>
    );
  }
}

export default App;
