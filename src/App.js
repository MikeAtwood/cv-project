import React, { Component } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Form from './components/Form';
import NewForm from './components/NewForm';
import Experience from './components/Experience';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
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
            id: uuidv4(),
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

  // handleInputChange = (event, id) => {
  //   const { name, value } = event.target;
  //   this.setState(prevState => {
  //     const updatedExperiences = prevState.newFormData.experiences.map((experience) => {
  //       if (experience.id === id) {
  //         return {
  //           ...experience,
  //           [name]: value
  //         };
  //       }
  //       return experience;
  //     });
  //     return {
  //       newFormData: {
  //         ...prevState.newFormData,
  //         [name]: value,
  //         experiences: updatedExperiences
  //       }
  //     };
  //   });
  // }

  handleInputChange = (event) => {
    const {name, value} = event.target
    this.setState(prevState => ({
      newFormData: {
        ...prevState.newFormData,
        [name]: value
      }
    }))
  }

  handleExperienceChange = (event, index) => {
    const { name, value } = event.target
    this.setState(prevState => {
      const updatedExperiences = prevState.newFormData.experiences.map((experience) => {
        if (experience.id === index) {
          return {
            ...experience,
            [name]: value
          }
        }
        return experience
      })
      return {
        newFormData: {
          ...prevState.newFormData,
          experiences: updatedExperiences
        }
      }
    })
  }

  createNewExperience = () => {
    const newExperience = {
      id: uuidv4(),
      companyName: '',
      position: '',
      mainTasks: '',
      jobStartDate: '',
      jobEndDate: '',
    }
    return newExperience;
  }

  handleAddExperience = () => {
    const { newFormData } = this.state;
    const { experiences, maxExperiences } = newFormData;
    if (experiences.length < maxExperiences) {
      const newExperience = this.createNewExperience();
      this.setState(prevState => {
        const newExperiences = [...prevState.newFormData.experiences, newExperience];
        return {
          newFormData: {
            ...prevState.newFormData,
            experiences: newExperiences,
            numExperiences: newExperiences.length
          }
        };
      });
    }
  };

  render() {
    

    const { experiences } = this.state.newFormData
    const experienceSections = experiences.map((experience, index) => {
      // const { companyName, position, mainTasks, jobStartDate, jobEndDate } = experience;
      return (
        <Experience
          key={index}
          experience={experience}
          handleExperienceChange={(event) => this.handleExperienceChange(event, experience.id)}
        />
      )
    });
    
    return (
      <div className="App">
        <div className='column'>
          <h1>form</h1>
          <Form
            newFormData={this.state.newFormData}
            handleInputChange={this.handleInputChange}
            handleAddExperience={this.handleAddExperience}
            handleExperienceChange={this.handleExperienceChange}
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
            experiences={this.state.newFormData.experiences}
            experienceSections={experienceSections}
            handleInputChange={this.handleInputChange}
          />
        </div>

      </div>
    );
  }
}

export default App;
