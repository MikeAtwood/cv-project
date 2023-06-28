import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import NewForm from './components/NewForm';
import Experience from './components/Experience';

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
        numExperiences: 0, // add numExperiences property
        maxExperiences: 5, // add maxExperiences property
        experiences: [
          {
            companyName: '',
            position: '',
            mainTasks: '',
            jobStartDate: '',
            jobEndDate: '',
          }
        ]
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

  handleAddExperience = () => {
    this.setState(prevState => ({
      newFormData: {
      ...prevState.newFormData,
      numExperiences: prevState.newFormData.numExperiences + 1,
      experiences: [...prevState.newFormData.experiences, { company: '', position: '', tasks: '', startDate: '', endDate: '' }]
      }
    }))
  }

  handleExperienceChange = (index, event) => {
    const { newFormData } = this.state
    const {experiences } = newFormData
    const { name, value } = event.target
    const updatedExperiences = experiences.slice()
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: value
    }
    this.setState({
      newFormData: {
        ...newFormData,
        experiences: updatedExperiences
      }
    })
  }

  render() {
      const { numExperiences, experiences } = this.state.newFormData
      const experienceSections = []
      for (let i = 0; i < numExperiences; i++) {
          experienceSections.push(
              <Experience
                  key={i}
                  index={i}
                  companyName={experiences[i].companyName}
                  position={experiences[i].position}
                  mainTasks={experiences[i].mainTasks}
                  jobStartDate={experiences[i].jobStartDate}
                  jobEndDate={experiences[i].jobEndDate}
                  onExperienceChange={this.handleExperienceChange}
              />
          )
      }
    return (
      <div className="App">
        <div className='column'>
          <h1>form</h1>
          <Form
            newFormData={this.state.newFormData}
            handleInputChange={this.handleInputChange}
            handleAddExperience={this.handleAddExperience}
            onExperienceChange={this.handleExperienceChange}
            experienceSections={experienceSections}
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
            updatedExperiences={this.state.updatedExperiences}
            experiences={this.state.newFormData.experiences}
            experienceSections={experienceSections}
          />
        </div>

      </div>
    );
  }
}

export default App;
