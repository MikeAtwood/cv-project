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

  handleFormChange = (formValues) => {
    this.setState({ newFormData: formValues })
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
          <NewForm formData={this.state.newFormData}/>
        </div>
       
      </div>
    );
  }
}

export default App;
