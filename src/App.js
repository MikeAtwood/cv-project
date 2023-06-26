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
      numExperiences: prevState.numExperiences + 1,
      experiences: [...prevState.experiences, { company: '', position: '', tasks: '', startDate: '', endDate: '' }]
    }))
  }

  handleExperienceChange = (index, event) => {
    const { name, value } = event.target
    const experiences = [...this.state.experiences]
    experiences[index][name] = value
    this.setState({ experiences })
  }

  render() {
      const { numExperiences, experiences } = this.state
      const experienceSections = []
      for (let i = 0; i < numExperiences; i++) {
          experienceSections.push(
              <Experience
                  key={i}
                  index={i}
                  company={experiences[i].company}
                  position={experiences[i].position}
                  tasks={experiences[i].tasks}
                  startDate={experiences[i].startDate}
                  endDate={experiences[i].endDate}
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
            handleExperienceChange={this.handleExperienceChange}
            experienceSections={this.experienceSections}
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
