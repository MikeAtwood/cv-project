import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NewForm from './components/NewForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newFormData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      }
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
        [name]: value
    })
}

  render() {
    return (
      <div className="App">
        <div className='column'>
          <h1>form</h1>
          <Form
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className='column'>
          <h1>new form</h1>
          <NewForm
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
          />
        </div>

      </div>
    );
  }
}

export default App;
