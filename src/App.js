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
        schoolName: '',
        titleOfStudy: '',
        studyStartDate: '',
        studyEndDate: '',
        companyName: '',
        position: '',
        mainTasks: '',
        jobStartDate: '',
        jobEndDate: '',
      }
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState(prevState => ({
      newFormData: {
        ...prevState.newFormData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <div className='column'>
          <h1>form</h1>
          <Form
            newFormData={this.state.newFormData}
            handleInputChange={this.handleInputChange}
          />
        </div>
        <div className='column'>
          <h1>new form</h1>
          <NewForm
            firstName={this.state.newFormData.firstName}
            lastName={this.state.newFormData.lastName}
            email={this.state.newFormData.email}
            phoneNumber={this.state.newFormData.phoneNumber}
            schoolName={this.state.newFormData.schoolName}
            titleOfStudy={this.state.newFormData.titleOfStudy}
            studyStartDate={this.state.newFormData.studyStartDate}
            studyEndDate={this.state.newFormData.studyEndDate}
            companyName={this.state.newFormData.companyName}
            position={this.state.newFormData.position}
            mainTasks={this.state.newFormData.mainTasks}
            jobStartDate={this.state.newFormData.jobStartDate}
            jobEndDate={this.state.newFormData.jobEndDate}
          />
        </div>

      </div>
    );
  }
}

export default App;
